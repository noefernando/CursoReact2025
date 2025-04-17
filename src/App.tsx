import Card, { CardBody } from './Components/Card'
import List from './Components/List'
function App() {
    const list = ["Goku","Tanjiro","Eren"];
    return <Card>
        <CardBody title="hola Mundo" text="este es el texto"/>
        <List data={list}/>
        <List data={list}/>
    </Card>
}

export default App
