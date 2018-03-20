import React, { Component } from 'react';
import { ChannelFactory } from 'winwrap';
import transport from './apps/transport';
import editor from './apps/editor';

import Editor from './Editor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
    };
    this.winwrap = new ChannelFactory({
      transport,
      editor,
    });
  }
  createChannel() {
    this.setState({
      channels: [
        ...this.state.channels,
        this.winwrap.createChannel(),
      ],
    });
  }
  render() {
    return (
      <div>
        WinWrap Webeditor
        <div>
          {this.state.channels.map(channel => (
            <Editor
              key={channel.id}
              id={channel.id}
              transport={this.winwrap.transport}
              channel={channel}
            />
          ))}
        </div>
        <button onClick={() => this.createChannel()}>Create Channel</button>
      </div>
    );
  }
}

export default App;
