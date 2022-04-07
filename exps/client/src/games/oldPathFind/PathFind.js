import React from "react";
import ReactDOM from "react-dom";
//import { Container, Row, Col } from 'react-grid-system';
//import DisplayGraph from './displayGraph';
import { nodeStatusType, Vertex } from './Vertex';
//import update from 'immutability-helper';
import PriorityQueue from 'js-priority-queue'
import { Container, Grid, Button, ButtonGroup, Paper } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import SendIcon from '@mui/icons-material/Send';
//import NavigationIcon from '@mui/icons-material/Psychology';
import NavigationIcon from '@mui/icons-material/TransferWithinAStation';
import walking from "./walking.jpg"


//const PathFind = () => {

var algosList = ['heuristic', 'dijkstra', 'astar'];
//var startNode = 0;
//var endNode = (numNodes ** 2) - 1;
//
class PathFinder extends React.Component {

  constructor(props) {
    super(props);
    console.log(props)

    const numNodes = 20

    var n = {};
    for (var i = 0; i < numNodes**2; ++i) {
      n[i] = nodeStatusType.alive;
    }
    n[0] = nodeStatusType.startNode;
    n[-1 + (numNodes**2)] = nodeStatusType.endNode;

    this.state = {
      numNodes: numNodes,
      algoSelect: 'astar',
      nodeStatus: n,
      endNode: (numNodes**2) -1 ,
      startNode: 0,
      findPath: false,
    }
    //this.reset();
  }


  // state = {
  //   numNodes: 10,
  //   algoSelect: 'astar',
  //   nodeStatus: {},
  //   endNode: 10**2,
  //   startNode: 0,
  // }


  isVisited(node) {
    return this.state.nodeStatus[node] === nodeStatusType.visited || this.state.nodeStatus[node] === nodeStatusType.path
  }

  isDead(node) {
    //console.log('is dead', nodeStatus[node])
    return this.state.nodeStatus[node] === nodeStatusType.dead
  }

  inGraph(node) {
    if (node[0] >= 0 && node[0] < this.state.numNodes && node[1] >= 0 && node[1] < this.state.numNodes) {
      return true;
    }
    else {
      return false;

    }
  }

  // const[numNodes, setNumNodes] = useState(10);
  // const[algoSelect, setAlgoSelect] = useState('astar');
  // const[nodeStatus, setNodeStatus] = useState({ });
  //   var algosList = ['heuristic', 'dijkstra', 'astar'];
  // var startNode = 0;
  // var endNode = (numNodes ** 2) - 1;


  visit(node) {
    //setNodeStatus({node: "visited"});
    //setNodeStatus(prev => { return { ...prev, [node]: nodeStatusType.visited } });

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return nextState.findPath || this.state.findPath;
  }

  componentDidMount() {

    //this.reset();
  }
  makeDead(node) {
    //console.log("nodes", node, this.state);
    if (this.isDead(node)) {
      console.log("revive", node);
      // setNodeStatus(prev => { return { ...prev, [node]: nodeStatusType.alive } });
      this.setState((oldState) => { return { nodeStatus: { ...oldState.nodeStatus, [node]: nodeStatusType.alive } } });

    } else {
      console.log("kill", node);
      // setNodeStatus(prev => { return { ...prev, [node]: nodeStatusType.dead } });
      this.setState((oldState) => { return { nodeStatus: { ...oldState.nodeStatus, [node]: nodeStatusType.dead } } });
      // this.setState((oldState) => {return  {...oldState.nodeStatus, [node]: nodeStatusType.dead} });
    }

  }

  reset() {
    var n = {};
    for (var i = 0; i < this.state.numNodes ** 2; ++i) {
      n[i] = nodeStatusType.alive;
    }
    n[0] = nodeStatusType.startNode;
    n[-1 + (this.state.numNodes ** 2)] = nodeStatusType.endNode;
    //setNodeStatus(n);
    this.setState({ nodeStatus: n, findPath: false });
    console.log('reset', n)
  }



  getNode([x, y]) {
    return (y * this.state.numNodes) + x;
  }


  // const displayGraph = () => {
  //   console.log("nodes", nodeStatus);
  //   return (
  //     <Grid container spacing={3} columns={numNodes}>
  //       {Array.apply(0, Array(numNodes ** 2)).map((x, i) => (

  //         <Grid item xs={1, {maxWidth: 1}} key={i + Date.now()}>
  //           <Vertex

  //             key={i + Date.now()}
  //             type={nodeStatus[i]}
  //             onClicked={makeDead}
  //             value={i}
  //           />

  //         </Grid>
  //       ))}
  //     </Grid>
  //   )
  // }

  displayGraph() {
    return (
      <Grid container maxWidth='sm'>
        {/* <Container maxWidth='sm'> */}
        {Array.apply(0, Array(this.state.numNodes)).map((x, j) => (
          <Grid container key={j + Date.now()} spacing={0} columns={this.state.numNodes}>
            {Array.apply(0, Array(this.state.numNodes)).map((x, i) => (
              // <Grid item sx={{ height: 100, width: 100 }} >
              <Grid item xs={1} key={(j * this.state.numNodes) + i + Date.now()} >
                <Vertex
                  key={(j * this.state.numNodes) + i + Date.now()}
                  type={this.state.nodeStatus[(j * this.state.numNodes) + i]}
                  onClicked={(n) => this.makeDead(n)}
                  value={(j * this.state.numNodes) + i}
                />

              </Grid>
            ))}
          </Grid>
        ))}
        {/* </Container  > */}
      </Grid>
    )
  }





  getNeighbours(node) {
    //var y = Math.floor(node/numNodes), x = node%numNodes;
    var neighs = [];
    var pos = this.getPos(node);

    //const n = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];
    const n = [[0, -1], [-1, 0], [1, 0], [0, 1]];
    // console.log(pos);

    for (const i of n) {
      var v = [pos[0] + i[0], pos[1] + i[1]];
      // console.log(i);
      // console.log(v, pos);
      if (this.inGraph(v) && !this.isDead(this.getNode(v))) {
        neighs.push(this.getNode(v));
      }
    }


    return neighs;
  }
  hval(node) {
    var [x1, y1] = this.getPos(this.state.endNode);
    var [x, y] = this.getPos(node);
    return Math.sqrt(((x1 - x) ** 2) + ((y1 - y) ** 2))
  }


  getPos(node) {
    return [node % this.state.numNodes, Math.floor(node / this.state.numNodes)];
  }

  start() {
    //console.log('here');

    var queue = new PriorityQueue({ comparator: (a, b) => { return a[1] - b[1] } });
    var gval = { 0: 0 };
    //var fval = {};
    var prev = { 0: 0 };
    var found = false;
    var visiting = {};


    queue.queue([this.state.startNode, 0])

    while (queue.length > 0 && !found) {
      //console.log('here')

      var [node, n] = queue.dequeue();

      var neighbours = this.getNeighbours(node)


      visiting[node] = nodeStatusType.visited;

      if (node === this.state.endNode) {
        found = true;
      } else {

        for (var neighbour of neighbours) {
          if (!(neighbour in prev) || gval[neighbour] > gval[node] + 1) {
            gval[neighbour] = gval[node] + 1;
            prev[neighbour] = node;

            switch (this.state.algoSelect) {
              case algosList[0]:
                queue.queue([neighbour, this.hval(neighbour)])
                break;
              case algosList[1]:
                queue.queue([neighbour, gval[neighbour]])
                break;
              case algosList[2]:
                queue.queue([neighbour, gval[neighbour] + (2 * this.hval(neighbour))])
                break;
              default:
                alert('algo select');
            }
          }
        }

      }

    }


    var pp = visiting;
    if (found) {
      var p = this.state.endNode
      pp[p] = nodeStatusType.path;
      while (prev[p] !== this.state.startNode) {
        //pp.push(prev[p])
        //setNodeStatus(prev => { return{  ...prev,[  node ]: "path"} });
        p = prev[p];
        pp[p] = nodeStatusType.path;
      }
      pp[this.state.startNode] = nodeStatusType.path;
      //setPath(pp);
      //console.log('pp path', pp)
    }

    this.setState((oldState) => { return { nodeStatus: { ...oldState.nodeStatus, ...pp }, findPath: true } });

    // setNodeStatus(prevNodes => {
    //   //console.log('set path', prevNodes)
    //   return { ...prevNodes, ...pp }
    // });
  }

  displayAlgosButtons() {
    //var algosList = ['heuristic', 'dijkstra', 'astar']
    return (
      <ButtonGroup variant="contained" size="large" sx={{ margin: 1 }} >
        {algosList.map((algo, i) => {
          return (
            <Button
              key={i}
              color={this.state.algoSelect === algo ? 'secondary' : 'primary'}
              onClick={() => { this.setState({ algoSelect: [algo] }) }}
              /* startIcon={<ReplayIcon />} */
              startIcon={<NavigationIcon />}
            >
              {algo}

            </Button>
          )
        }
        )}
      </ButtonGroup>
    )
  }

  render() {
    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {this.displayAlgosButtons()}
            <ButtonGroup variant="contained" size="large" sx={{ margin: 1 }}>
              <Button onClick={() => { this.reset() }} color={'error'} startIcon={<ReplayIcon />}>
                reset
              </Button>
              <Button onClick={() => { this.start() }} color={'success'} endIcon={<SendIcon />}>
                start
              </Button>
            </ButtonGroup>
          </Grid>

          {/* <Grid item xs={4}> */}
          {/*   <ButtonGroup variant="contained" size="large" > */}
          {/*     <Button variant="contained" onClick={() => { start() }} > */}
          {/*       start */}
          {/*     </Button> */}
          {/*     <Button variant="contained" onClick={() => { reset() }} > */}
          {/*       reset */}
          {/*     </Button> */}
          {/*   </ButtonGroup> */}
          {/* </Grid> */}

          <Grid item xs={12}>
            {this.displayGraph()}
            {/* </Grid> */}
          </Grid>
          {/* {Array.apply(0, Array(this.state.numNodes)).map((x, i) => ( */}
          {/*   // <Grid item sx={{ height: 100, width: 100 }} > */}
          {/*   <Grid item xs={1} key={i + Date.now()} > */}
          {/*     <Vertex */}
          {/*       key={i + Date.now()} */}
          {/*       type={this.state.nodeStatus[i]} */}
          {/*       /\* onClicked={()=>console.log('button Clicked')} *\/ */}
          {/*       value={i} */}
          {/*     /> */}

          {/*   </Grid> */}
          {/* ))} */}

          {/* <span style={{ backgroundImage: `url(${'./grandpa.png'})` }}> */}
          {/* </span> */}
          {/* <img alt="" src={"/grandpa.png"} /> */}
        </Grid>
        <Button onClick={() => {
          this.setState({ findPath: true })
          console.log(this.state)
        }}>
          show state
        </Button>
      </>
    )

  }

}


export default PathFinder;
