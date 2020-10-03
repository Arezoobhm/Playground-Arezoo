import React from 'react';
import './tabs.css';

class TabNav extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="tab-nav">
                <ul>
                    {
                        this.props.tabs.map(tab => {
                            const active = (tab.title === this.props.selected ? 'active' : '');
                            return (
                                <li className={"tab-item" + active} key={tab.id}>
                                    <a
                                        onClick={() => {
                                            this.props.setSelected(tab.title);
                                            this.props.updatedData(tab.id);
                                        }}>
                                        {tab.title}&nbsp;
                                        <span>&#94;</span>
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default TabNav;
