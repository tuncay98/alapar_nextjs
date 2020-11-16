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
                <div className={'title'}><span className={'underline'}>Özəl Elanlar</span></div>
                <Carousel viewAmount={4}>
                    <div className={'carousel-item-container'}>
                        <div className={'item'}>
                            <Card size={'45'} price={'55.000'} loc={'Sahil metrosu'} premium={true}>
                                <img src="placeholders/1.jpg" />
                                <img src="placeholders/2.jpg" />
                                <img src="placeholders/3.jpg" />
                                <img src="placeholders/1.jpg" />
                                <img src="placeholders/1.jpg" />
                                <img src="placeholders/1.jpg" />                           
                                <img src="placeholders/1.jpg" />                           
                                <img src="placeholders/1.jpg" />                           
                                <img src="placeholders/1.jpg" />                           
                                <img src="placeholders/1.jpg" />                           
                                <img src="placeholders/1.jpg" />                           
                                <img src="placeholders/1.jpg" />                           
                                <img src="placeholders/1.jpg" />                           
                                <img src="placeholders/1.jpg" />                           
                                </Card>
                        </div>
                    </div>
                    <div className={'carousel-item-container'}>
                        <div className={'item'}>
                            <Card size={'20'} price={'25.000'} loc={'Azadliq Metrosu'}>
                                <img src="placeholders/2.jpg" />
                            </Card>
                        </div>
                    </div>
                    <div className={'carousel-item-container'}>
                        <div className={'item'}>
                            <Card size={'20'} price={'30.000'} loc={'Xalqlar Metrosu'}>
                                <img src="placeholders/3.jpg" />
                            </Card>
                        </div>
                    </div>
                    <div className={'carousel-item-container'}>
                        <div className={'item'}>
                            <Card size={'20'} price={'32.500'} loc={'7-ci mikrorayon'}>
                                <img src="placeholders/1.jpg" />
                            </Card>
                        </div>
                    </div>
                    <div className={'carousel-item-container'}>
                        <div className={'item'}>
                            <Card size={'20'} price={'32.500'} loc={'7-ci mikrorayon'}>
                                <img src="placeholders/1.jpg" />
                            </Card>
                        </div>
                    </div>
                    <div className={'carousel-item-container'}>
                        <div className={'item'}>
                            <Card size={'20'} price={'32.500'} loc={'7-ci mikrorayon'}>
                                <img src="placeholders/1.jpg" />
                            </Card>
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Header;