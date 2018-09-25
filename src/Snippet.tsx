import * as React from 'react';


import Prism from 'prismjs';

import 'prismjs/components/prism-python.min.js';
import 'prismjs/themes/prism-okaidia.css';

import './snippet.css';

import * as Block from './Block'

interface IBlock {
  code: string;
  good: boolean;
}

interface ISnippetProps {
  blocks: IBlock[];
  lang: string;
  locked: boolean;
}

class Snippet extends React.Component<ISnippetProps, {}> {
  constructor(props: ISnippetProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const children = [];
    for (let i = 0; i < this.props.blocks.length; i++) {
      children.push(<Block.Block key={i} {...this.props.blocks[i]} language={this.props.lang} locked={this.props.locked} />);
    }
    return (
      <pre className={"language-" + this.props.lang}>
        {children}
      </pre>
    );
  }

  public componentDidMount() {
    Prism.highlightAll();
  }
}

export {Snippet, ISnippetProps, IBlock};
