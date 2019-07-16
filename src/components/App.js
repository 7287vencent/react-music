import React, { Suspense, lazy}from 'react';
import './App.styl';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom'
import Loading from './loading/Loading'
import Play from '../container/Play'
import MusicPlayer from '../components/play/MusicPlayer'
// 引入页面 路由 组件
const UserDetail = lazy(() => import('../pages/userDetail/UserDetail'))
const User = lazy(() => import('../pages/user/User.jsx'))
const Find = lazy(() => import('../pages/find/Find.jsx'))
const Friend = lazy(() => import('../pages/friend/friend.jsx'))
const Video = lazy(() => import('../pages/video/Video.jsx'))
const Search = lazy(() => import('../pages/search/Search'))

// console.log(getBanner)
// function getbanners() {
//   getBanner
//   .then(res => {
//     console.log('getBanner',res)
//   })W
// }
// getbanners()
function App() {
  return (
    <Router>
      <div className="App">
          <div className="music-tab fixedTop">
            <div className="tab-img">
              <NavLink to="/uderdetail">
                <img src={require('../assets/images/Screenshot_20190714_153608_com.netease_03.png')}></img>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink className="link" to="/user">
                <span>我的</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink className="link" to="/find">
                <span>发现</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink className="link" to="/friend">
                <span>朋友</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink className="link" to="/video">
                <span>视频</span>
              </NavLink>
            </div> 
            <div className="tab-img">
              <NavLink  to="/search">
                <img src={require('../assets/images/Screenshot_20190714_153608_com.netease_05.png')}></img>
              </NavLink>
            </div> 
        </div>
        <div className="music-view">
          <Suspense fallback={<Loading></Loading>}>
            <Switch>
              <Route path="/uderdetail" component={UserDetail}></Route>
              <Route path="/user" component={User}></Route>
              <Route path="/find" component={Find}></Route>
              <Route path="/friend" component={Friend}></Route>
              <Route path="/video" component={Video}></Route>
              <Route path="/search" component={Search}></Route>
              <Route path="/play/:id" component={Play}></Route>
              <Redirect path="/" to="/find"></Redirect>
            </Switch>
          </Suspense>
        </div>
        {/* <MusicPlayer> */}
      </div>
    </Router>
  );
}

export default App;
