"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var components_1 = require("packages/components/src/index");
var Header_1 = require("../components/header/Header");
var Sidebar_1 = require("../components/sidebar/Sidebar");
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sidebarItems = [
            {
                label: 'Hackathon',
                icon: 'inbox',
                path: '/p1'
            },
            {
                label: 'Home',
                icon: 'home',
                path: '/'
            },
            {
                label: 'Ufs',
                icon: 'menu',
                path: '/p2'
            },
            {
                label: 'Labarto',
                icon: 'inbox',
                path: '/p3'
            }
        ];
        _this.state = {
            isSidebarOpen: true,
        };
        _this.toggleSidebar = function () { return _this.setState(function (_a) {
            var isSidebarOpen = _a.isSidebarOpen;
            return ({ isSidebarOpen: !isSidebarOpen });
        }); };
        return _this;
    }
    Dashboard.prototype.render = function () {
        var isSidebarOpen = this.state.isSidebarOpen;
        return (<components_1.Column>
        <Header_1.default toggleSidebar={this.toggleSidebar}/>
        <Sidebar_1.default isOpen={isSidebarOpen} items={this.sidebarItems}/>
        <react_router_dom_1.Switch>
          <react_router_dom_1.Route path={'/'} exact={true} render={function () { return <div />; }}/>
        </react_router_dom_1.Switch>
      </components_1.Column>);
    };
    return Dashboard;
}(React.Component));
exports.default = Dashboard;
