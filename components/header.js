import { Component } from 'react'
import Link from 'next/link'
import Carousel from '@/subcomponents/carousel'
import Card from '@/subcomponents/card'

class Header extends Component {
    constructor() {
        super()
    }

    render(h) {
        return (
            <div className={'header'}>
                <div className={'title'}>Title</div>
                <Carousel viewAmount={4}>
                    <div className={'carousel-item-container'}>
                        <div className={'item'}>
                            <Card>
                                <img src="placeholders/1.jpg" />
                                <img src="placeholders/2.jpg" />
                                <img src="placeholders/3.jpg" />
                                <img src="placeholders/1.jpg" />
                                <img src="placeholders/1.jpg" />
                                <img src="placeholders/1.jpg" />
                            </Card>
                        </div>
                    </div>
                    <div className={'carousel-item-container'}>
                        <div className={'item'}>
                            <Card>
                                <img src="placeholders/2.jpg" />
                            </Card>
                        </div>
                    </div>
                    <div className={'carousel-item-container'}>
                        <div className={'item'}>
                            <Card>
                                <img src="placeholders/3.jpg" />
                            </Card>
                        </div>
                    </div>
                    <div className={'carousel-item-container'}>
                        <div className={'item'}>
                            <Card>
                                <img src="placeholders/1.jpg" />
                            </Card>
                        </div>
                    </div>
                    <div className={'carousel-item-container'}>
                        <div className={'item'}>
                            <Card>
                                <img src="placeholders/2.jpg" />
                            </Card>
                        </div>
                    </div>
                    <div className={'carousel-item-container'}>
                        <div className={'item'}>
                            <Card>
                                <img src="placeholders/3.jpg" />
                            </Card>
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Header;