using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Address_Book_Web_Application;

namespace Address_Book_Web_Application.Controllers
{
    [Route("api/[action]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IServices _services;

        public ContactController(IServices services)
        {
            _services = services;
        }

        [HttpGet]
        [ActionName("contact")]
        public IActionResult ContactById(string id)
        {
            var contact = _services.GetContactById(id);
            if (contact == null)
                return BadRequest();

            return Ok(contact);
        }

        [HttpGet]
        [ActionName("contacts")]
        public IActionResult AllContacts()
        {
            var contacts = _services.GetAllContacts();
            return Ok(contacts);
        }

        [HttpPost]
        [ActionName("add")]
        public IActionResult AddContact([FromBody] Models contact)
        {
            if (contact == null)
                return NoContent();

            if (!_services.AddNewContact(contact))
                return BadRequest();

            return Ok();
        }

        [HttpPut]
        [ActionName("edit")]
        public IActionResult EditContact([FromBody] Models contact, string id)
        {
            if (contact == null)
                return NoContent();

            var status = _services.EditContact(contact, id);

            if (!status)
                return BadRequest();

            return Ok();
        }

        [HttpDelete]
        [ActionName("delete")]
        public IActionResult DeleteContact(string id)
        {
            var status = _services.DeleteContact(id);

            if (!status)
                return BadRequest();

            return Ok();
        }
    }
}
