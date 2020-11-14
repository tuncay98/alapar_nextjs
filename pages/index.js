import Head from 'next/head'
import Category from '@/subcomponents/category'
import { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={'main'}>
        <div className={'container'}>
          <Category></Category>
          <Category></Category>
        </div>
      </div>

    );
  }
}

export default Home;
