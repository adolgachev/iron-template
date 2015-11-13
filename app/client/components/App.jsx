injectTapEventPlugin();

var {
  AppCanvas,
  AppBar,
  Styles,
  } = MUI;

var { ThemeManager, LightRawTheme } = Styles;

let { SvgIcons } = MUI.Libs;

App = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },

  render() {
    return (
    <AppCanvas>
      <AppBar title="My App" />
    </AppCanvas>
    );
  }
});
