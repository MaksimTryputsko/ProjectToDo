import './main.scss';
import  { sendRequest, createLi }  from './modules/reExport'
type Item = {
    completed: boolean,
    id: number,
    title: string,
    userId: number,
}
interface FromServer {
    completed: boolean,
    id: number,
    title: string,
    userId: number,
}

sendRequest('GET', "todos")
    .then((data: any): void => {
        console.log(typeof(data))
        const elements = data.slice(0,10) 
        elements.forEach(
          (item: Item): void => {
            const {completed, id, title, userId} = item
            createLi(title, id, completed, userId)
          }
        )            
    })