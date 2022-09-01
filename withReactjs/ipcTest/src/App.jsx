import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { mainListItems } from './listItems';

import { ipcRenderer } from "electron";

// import kuromoji from 'kuromoji';
// import Kuroshiro from "kuroshiro";
// import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";

// const kuroshiro = new Kuroshiro();
// (async () => {
//   await kuroshiro.init(new KuromojiAnalyzer({dictPath: './dict/kuromoji/'}));
// })();

ipcRenderer.on('async-streaming-callback', (event, arg) => {
  console.log("?????? back!!!!")
  console.log(arg);
});

const drawerWidth = 240;
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const theme = createTheme();

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };

    this.toggleMyDrawer = this.toggleMyDrawer.bind(this);
  }

  toggleMyDrawer() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <Drawer variant="permanent" open={this.state.isOpen}>
            <Button variant='contained' onClick={this.toggleMyDrawer}>Toggle</Button>
            {/* <Button onClick={(e)=>{
              kuromoji.builder({ dicPath: './dict/kuromoji/' }).build(function (err, tker) {
                console.log(tker.tokenize('日本語'));
              });
            }}>Try Me</Button> */}
            <Button onClick={(e)=>{
              ipcRenderer.send('async-streaming-func', 'async ping from render');
            }}>IPC with Me</Button>
            <List component="nav">
              {mainListItems}
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
}

export default Dashboard;
