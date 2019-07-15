import React from 'react';
import Badge from './Badge';
import './Lists.css';

class List extends React.Component {
  render() {
    let todoNum = 0;
    let { data } = this.props;
    if (data) {
      todoNum = data.length;
    }

    return (
      <div id={this.props.id} className='card'>
        <div className='card-header d-flex justify-content-between align-items-center '>
          <strong className='text-white'>{this.props.name}</strong>
          <Badge title='Tasks' num={todoNum} />
        </div>
        <ul
          style={{ height: '100%' }}
          id={this.props.id}
          onDragOver={this.props.allowsDrop}
          onDrop={this.props.drop}
        >
          {data
            ? data.map(list => {
                return (
                  <li
                    key={list.id}
                    id={list.id}
                    draggable={true}
                    onDragStart={event => this.props.dragStart(event, list)}
                    onDragOver={this.props.dragOver}
                    onDragEnd={this.props.dragEnd}
                  >
                    {list.text}
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    );
  }
}

export default List;
