import './main.scss';
import  { sendRequest, createLi, URL }  from './modules/reExport'

sendRequest('GET', URL, "todos")
    .then(data => {
        const elements = data.slice(0,10)
        elements.forEach(
          item => destructuringAndCreate(item)
        )            
    })

function destructuringAndCreate (item) {
        let {completed, id, title, userId} = item
        createLi(title, id, completed, userId)
}