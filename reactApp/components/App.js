import React from 'react';
import {Editor, EditorState, Modifier, RichUtils} from 'draft-js';

const displayMessage =
  'The React Redux Boilerplate is running successfully!';

// class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      tAlignment: 'left',
      colorValue: '#000',
      selectedColor: 'black'
    };
    this.onChange = (editorState) => this.setState({editorState});
    this.toggleColor = (toggledColor) => this._toggleColor(toggledColor);
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'BOLD'
    ));
  }
  _onUnderlineClick() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'UNDERLINE'
    ));
  }
  _onItalicClick() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'ITALIC'
    ));
  }
  _onHighlightClick() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'HIGHLIGHT'
    ));
  }

  _onRightAlignClick() {
    this.setState({tAlignment: 'right'});
  }

  changeColor(event) {
    var newColor = event.target.value;
    console.log("old color was: " + this.state.selectedColor);
    this.setState({selectedColor: newColor});
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      newColor.toUpperCase()
    ));
    console.log("new color is: " + this.state.selectedColor);
  }

  render() {
    return (
      <div id='content'>
        <h1>Draft.js Editor</h1>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <button onClick={this._onItalicClick.bind(this)}>Italic</button>
        <button onClick={this._onUnderlineClick.bind(this)}>Underline</button>
        <button onClick={this._onRightAlignClick.bind(this)}>Right Align</button>
        <button onClick={this._onHighlightClick.bind(this)}>Highlight</button>
        <select
          value={this.state.selectValue}
          onChange={this.changeColor.bind(this)}>
          <option defaultValue value="black">Black</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        <div className='editor' onClick={this.focus}>
          <Editor
            customStyleMap={styleMap}
            editorState={this.state.editorState}
            textAlignment={this.state.tAlignment}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
};

// This object provides the styling information for our custom color
// styles.
const styleMap = {
  'HIGHLIGHT': {
    backgroundColor: 'lightgreen'
  },
  'RED': {
    color: 'rgba(255, 0, 0, 1.0)',
  },
  'ORANGE': {
    color: 'rgba(255, 127, 0, 1.0)',
  },
  'YELLOW': {
    color: 'rgba(180, 180, 0, 1.0)',
  },
  'GREEN': {
    color: 'rgba(0, 180, 0, 1.0)',
  },
  'BLUE': {
    color: 'rgba(0, 0, 255, 1.0)',
  },
  'INDIGO': {
    color: 'rgba(75, 0, 130, 1.0)',
  },
  'VIOLET': {
    color: 'rgba(127, 0, 255, 1.0)',
  },
  'BLACK': {
    color: 'rgba(0, 0, 0, 1.0)'
  }
};

export default App;
