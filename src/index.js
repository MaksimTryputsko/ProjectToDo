import './main.scss';
import  { sendRequest, createLi }  from './modules/reExport'

sendRequest('GET', "todos")
    .then(data => {
        const elements = data.slice(0,10)
        elements.forEach(
          item => {
            const {completed, id, title, userId} = item
            createLi(title, id, completed, userId)
          }
        )            
    })
