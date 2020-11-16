import { Component } from 'react'
import Card from '@/subcomponents/card'

class Category extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let arr = []
        for (let index = 0; index < 8; index++) {
            arr.push(<div className={'item'}>
                <Card size={'45'} price={'55.000'} loc={'Sahil metrosu'} premium={true}>
                    <img src={"https://source.unsplash.com/random/800x60" + index} />
                    <img src="placeholders/2.jpg" />
                    <img src="placeholders/3.jpg" />
                    <img src="placeholders/1.jpg" />
                    <img src="placeholders/1.jpg" />
                    <img src="placeholders/1.jpg" />
                </Card>
            </div>)

        }
        return (
            <div className={'categoryCard'}>
                <div className={'titles '}>
                    <div className={'categoryTitle'}>
                        Category Name
                    </div>
                    <div className={'extraTitle'}>
                        Daha çox
                    </div>
                </div>
                <div className={'categoryList'}>
                    {arr}
                </div>
            </div>

        );
    }
}

export default Category;
