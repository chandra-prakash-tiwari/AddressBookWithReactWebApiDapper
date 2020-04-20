using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace Address_Book_Web_Application
{
    public class Services : IServices
    {
        IDbConnection DbConnection { get; set; }
        public Services()
        {
            DbConnection = new SqlConnection(Config.ConnectionString);
            DbConnection.Open();
        }
        public bool AddNewContact(Models contact)
        {
            contact.Id = Guid.NewGuid().ToString();
            return this.DbConnection.Execute(@"INSERT INTO Contacts (Id,Name,Address,Mobile,Email,Website,Landline) 
                                                VALUES(@Id,@Name,@Address,@Mobile,@Email,@Website,@Landline)", contact)>0;   
        }

        public Models GetContactById(string id)
        {
            return DbConnection.Query<Models>(@"SELECT * FROM Contacts WHERE ID=@Id", new { Id = id }).FirstOrDefault();
        }

        public List<Models> GetAllContacts()
        {
            return DbConnection.Query<Models>(@"SELECT *FROM Contacts").ToList();
        }

        public bool DeleteContact(string id)
        {
            return DbConnection.Execute(@"DELETE FROM Contacts WHERE ID=@Id", new { Id = id })>0;
        }

        public bool EditContact(Models contact,string id)
        {
            return DbConnection.Execute(@"UPDATE Contacts SET Name=@Name,Email=@Email,Address=@Address WHERE ID=@Id", new { Id=id, Name=contact.Name,Email=contact.Email,Address=contact.Address })>0;
        }
    }
}
 