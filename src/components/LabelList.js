import React from 'react';

class LabelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: props.labels,
      clickedLabels: [],
    };
  }

  handleClick(label) {
    const { clickedLabels } = this.state;
    const index = clickedLabels.indexOf(label);

    if (index === -1) {
      // Label is not in clickedLabels, so add it
      this.setState({
        clickedLabels: [...clickedLabels, label],
      });
    } else {
      // Label is already in clickedLabels, so remove it
      this.setState({
        clickedLabels: clickedLabels.slice(0, index).concat(clickedLabels.slice(index + 1)),
      });
    }
  }

  renderLabels() {
    const { labels, clickedLabels } = this.state;

    return labels.map((label, index) => {
      const isClicked = clickedLabels.includes(label);

      return (
        <div
          key={index}
          className={`label ${isClicked ? 'highlighted' : ''}`}
          onClick={() => this.handleClick(label)}
        >
          {label}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="label-list">
        {this.renderLabels()}
      </div>
    );
  }
}

export default LabelList;
