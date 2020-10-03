import React from 'react';
import TabNav from './TabNav';
import Tab from './Tab';
import './tabs.css';

class Tabs extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selected: "Vestibulum at odio sit amet",
            text: [],
            loader: false,
        }
        this.setSelected = this.setSelected.bind(this);
        this.updatedData = this.updatedData.bind(this);
    }

    componentDidMount() {
        fetch(`./ajax/tab1.json`)
            .then(response => response.json())
            .then(data => this.setState({ text: data.item.content }))
            .catch()
    }

    updatedData = (id) => {
        this.setState({ loader: true })
        fetch(`./ajax/tab${id}.json`)
            .then(response => response.json())
            .then(data => this.setState({ 
                text: data.item.content,
                loader: false 
            }))
            .catch()
    }

    setSelected = (title) => {
        this.setState({ selected: title });
    }

    render() {
        return (
            <div className="tabs-container">
                <TabNav
                    tabs={[
                        {
                            id: 1,
                            title: 'Vestibulum at odio sit amet',
                        },
                        {
                            id: 2,
                            title: 'Sed vehicula neque',
                        },
                        {
                            id: 3,
                            title: 'Nulla id libero pretium',
                        }
                    ]}
                    selected={this.state.selected}
                    setSelected={this.setSelected}
                    updatedData={this.updatedData}
                >
                    <Tab isSelected={this.state.selected === 'Vestibulum at odio sit amet'} loader={this.state.loader}>
                        <p>
                            {this.state.text.map(item => (<li key={item}>{item}</li>))}

                        </p>
                    </Tab>
                    <Tab isSelected={this.state.selected === 'Sed vehicula neque'} loader={this.state.loader}>
                        <p>
                            {this.state.text.map(item => (<li key={item}>{item}</li>))}
                        </p>
                    </Tab>
                    <Tab isSelected={this.state.selected === 'Nulla id libero pretium'} loader={this.state.loader}>
                        <p>
                            {this.state.text.map(item => (<li key={item}>{item}</li>))}
                        </p>
                    </Tab>
                </TabNav>
            </div>
        )
    }
}

export default Tabs;
