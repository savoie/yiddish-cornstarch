import * as React from 'react';

interface IBlockProps {
  code: string;
  good: boolean;
  language: string;
  locked: boolean;
}

enum Highlight {
  None = 1,
  Good,
  Bad,
}

function highlightCssClass(h: Highlight) {
  return Highlight[h].toLowerCase();
}

interface IBlockState {
  hl: Highlight;
}

class Block extends React.Component<IBlockProps, IBlockState> {
  constructor(props: IBlockProps) {
    super(props);
    this.state = { hl: Highlight.None };
  }

  public render() {
    const langclass = "language-" + this.props.language;
    const classes = [
      langclass,
      "block",
      highlightCssClass(this.state.hl)
    ]

    if (this.props.locked) {
      classes.push("locked");
    }

    return (<code className={classes.join(" ")} onClick={this.click}>
      {this.props.code}
    </code>);
  }

  private click = (e: any) => {
    if (!this.props.locked) {
      this.setState((state: IBlockState, props: IBlockProps) => ({
        hl: state.hl !== Highlight.None ? state.hl : (props.good ? Highlight.Good : Highlight.Bad),
      }));
    }
  }
}

export {Block, IBlockProps};
