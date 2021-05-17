import React, { Component } from 'react';
import Contact from './Contact';

const allContacts = [{
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
}, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
}, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666",
}, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
}, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male"
}, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male"
}]
class Contacts extends Component {

  state = {
    contacts: allContacts,
    search: ''
  }

  handleSearchChange = e => {
    const searchValue = (e.target.value).toLowerCase()
    const filteredContacts = allContacts.filter(allContacts => Object.values(allContacts).some(i => (i.toLowerCase()).includes(searchValue)))
    this.setState({ search: searchValue }, () => {
      if (searchValue.length > 0) {
        this.setState({ contacts: filteredContacts }, () => {
          if (filteredContacts.length > 0) {
            return filteredContacts
          } else {
            return allContacts
          }
        })
      } else {
        this.setState({ contacts: allContacts })
      }
    })
  }

  render() {
    return (
      <div className="wrap_app">
        <div className="wrap_search" >
          <input className="search_panel" type="text" placeholder="Пошук..."
            value={this.state.data} onChange={this.handleSearchChange} />
            <div className="search_list">
              <p className="text">(почніть вводити частину імені, прізвища чи номера)</p>
            </div>
          <div className="wrap_contacts_list">
            {this.state.contacts.map((contact, i) => <Contact contact={contact} key={i} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default Contacts;
