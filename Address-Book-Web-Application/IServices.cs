using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Address_Book_Web_Application
{
    public interface IServices
    {
        bool AddNewContact(Models contact);

        Models GetContactById(string id);

        List<Models> GetAllContacts();

        bool DeleteContact(string id);

        bool EditContact(Models contact, string id);
    }
}
