angular.module('templates-prod', ['components/auth/login.html', 'components/crud/templates/add.html', 'components/crud/templates/edit.html', 'components/crud/templates/list.html', 'components/crud/templates/show.html', 'components/dashboard/dashboard.html', 'components/personelinfo/personelinfo.html', 'components/staff/templates/add.html', 'components/staff/templates/edit.html', 'components/staff/templates/list.html', 'components/staff/templates/show.html', 'components/student/student_add_template.html', 'components/student/student_list_template.html', 'components/types/types_template.html', 'shared/templates/add.html', 'shared/templates/directives/chat.html', 'shared/templates/directives/header-notification.html', 'shared/templates/directives/notifications.html', 'shared/templates/directives/sidebar-search.html', 'shared/templates/directives/sidebar.html', 'shared/templates/directives/stats.html', 'shared/templates/directives/timeline.html', 'shared/templates/fieldset.html', 'shared/templates/foreignKey.html', 'shared/templates/linkedModelModalContent.html', 'shared/templates/listnodeModalContent.html', 'shared/templates/modalContent.html']);

angular.module("components/auth/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/auth/login.html",
    "<div ng-app=\"ulakbus.auth\" class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-4 col-md-offset-4\">\n" +
    "            <div class=\"login-panel panel panel-default\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <h3 class=\"panel-title\">Sign In</h3>\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <span class=\"label label-warning\">{{message}}</span>\n" +
    "                    <form name=\"loginForm\" sf-schema=\"schema\" sf-form=\"form\" sf-model=\"model\" ng-submit=\"onSubmit(loginForm)\"></form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/crud/templates/add.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/crud/templates/add.html",
    "<div ng-app=\"ulakbus.crud\">\n" +
    "    <ng-include src=\"'shared/templates/add.html'\"></ng-include>\n" +
    "</div>");
}]);

angular.module("components/crud/templates/edit.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/crud/templates/edit.html",
    "<div ng-app=\"ulakbus.crud\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <h1>{{ schema.title }}</h1>\n" +
    "        <form name=\"formgenerated\" sf-schema=\"schema\" sf-form=\"form\" sf-model=\"model\" ng-submit=\"onSubmit(formgenerated)\"></form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/crud/templates/list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/crud/templates/list.html",
    "<div class=\"starter-template\">\n" +
    "    <h1>{{model}}</h1>\n" +
    "    <table class=\"table table-bordered\" style=\"background-color:#fff;\">\n" +
    "        <thead>\n" +
    "        <tr>\n" +
    "            <th colspan=\"2\">#</th>\n" +
    "            <th ng-repeat=\"(key,value) in objects[0].data\">{{ key }}</th>\n" +
    "            <th>action</th>\n" +
    "        </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "        <tr ng-repeat=\"object in objects\">\n" +
    "            <td width=\"60\">\n" +
    "                <label>\n" +
    "                    <input type=\"checkbox\" style=\"zoom:1.5; margin:5px 0 0 8px;\">\n" +
    "                </label>\n" +
    "            </td>\n" +
    "            <th scope=\"row\" style=\"text-align:center\">1</th>\n" +
    "            <td ng-repeat=\"(key,value) in object.data\">{{value}}</td>\n" +
    "            <td>\n" +
    "                <a ng-href=\"#/crud/{{model}}/edit/{{object.key}}\">Edit</a><br>\n" +
    "                <a ng-href=\"#/crud/{{model}}/{{object.key}}\">Show</a>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</div>");
}]);

angular.module("components/crud/templates/show.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/crud/templates/show.html",
    "<div class=\"starter-template\">\n" +
    "    <h1>{{model}}</h1>\n" +
    "\n" +
    "    <p ng-repeat=\"(key, value) in object\"><span class=\"col-md-3\">{{ key }}:</span>{{value}}</p>\n" +
    "</div>");
}]);

angular.module("components/dashboard/dashboard.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/dashboard/dashboard.html",
    "<div ng-app=\"ulakbus.dashboard\">\n" +
    "    <div class=\"starter-template\">\n" +
    "    \n" +
    "        <!-- table view -->\n" +
    "         <table class=\"table table-bordered\" style=\"background-color:#fff;\">\n" +
    "          <thead>\n" +
    "            <tr>\n" +
    "              <th colspan=\"2\">\n" +
    "              	<label>\n" +
    "                	<input type=\"checkbox\" style=\"zoom:1.5; margin:5px 0 0 8px;\">\n" +
    "                    Hepsini Seç\n" +
    "              	</label>\n" +
    "              </th>\n" +
    "              <th>First Name</th>\n" +
    "              <th>Last Name</th>\n" +
    "              <th>Username</th>\n" +
    "            </tr>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "            <tr>\n" +
    "              <td width=\"60\">\n" +
    "              	<label>\n" +
    "                	<input type=\"checkbox\" style=\"zoom:1.5; margin:5px 0 0 8px;\">\n" +
    "                </label>\n" +
    "              </td>\n" +
    "              <th scope=\"row\" style=\"text-align:center\">1</th>\n" +
    "              <td>Mark</td>\n" +
    "              <td>Otto</td>\n" +
    "              <td>@mdo</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>\n" +
    "              	<label>\n" +
    "                	<input type=\"checkbox\" style=\"zoom:1.5; margin:5px 0 0 8px;\">\n" +
    "              	</label>\n" +
    "              </td>\n" +
    "              <th scope=\"row\" style=\"text-align:center\">2</th>\n" +
    "              <td>Jacob</td>\n" +
    "              <td>Thornton</td>\n" +
    "              <td>@fat</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>\n" +
    "              	<label>\n" +
    "                	<input type=\"checkbox\" style=\"zoom:1.5; margin:5px 0 0 8px;\">\n" +
    "              	</label>\n" +
    "              </td>\n" +
    "              <th scope=\"row\" style=\"text-align:center\">3</th>\n" +
    "              <td>Larry</td>\n" +
    "              <td>the Bird</td>\n" +
    "              <td>@twitter</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td width=\"60\">\n" +
    "              	<label>\n" +
    "                	<input type=\"checkbox\" style=\"zoom:1.5; margin:5px 0 0 8px;\">\n" +
    "                </label>\n" +
    "              </td>\n" +
    "              <th scope=\"row\" style=\"text-align:center\">4</th>\n" +
    "              <td>Mark</td>\n" +
    "              <td>Otto</td>\n" +
    "              <td>@mdo</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>\n" +
    "              	<label>\n" +
    "                	<input type=\"checkbox\" style=\"zoom:1.5; margin:5px 0 0 8px;\">\n" +
    "              	</label>\n" +
    "              </td>\n" +
    "              <th scope=\"row\" style=\"text-align:center\">5</th>\n" +
    "              <td>Jacob</td>\n" +
    "              <td>Thornton</td>\n" +
    "              <td>@fat</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>\n" +
    "              	<label>\n" +
    "                	<input type=\"checkbox\" style=\"zoom:1.5; margin:5px 0 0 8px;\">\n" +
    "              	</label>\n" +
    "              </td>\n" +
    "              <th scope=\"row\" style=\"text-align:center\">6</th>\n" +
    "              <td>Larry</td>\n" +
    "              <td>the Bird</td>\n" +
    "              <td>@twitter</td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "        <!-- end of table view -->\n" +
    "        \n" +
    "       <div class=\"btn-group\">\n" +
    "          <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "            İşlemler <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li><a href=\"\">İşlem 1</a></li>\n" +
    "            <li><a href=\"\">İşlem 2</a></li>\n" +
    "            <li><a href=\"\">İşlem 3</a></li>\n" +
    "            <li role=\"separator\" class=\"divider\"></li>\n" +
    "            <li><a href=\"\">İşlem 4</a></li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "        \n" +
    "        \n" +
    "        <hr>\n" +
    "\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/personelinfo/personelinfo.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/personelinfo/personelinfo.html",
    "<div ng-app=\"ulakbus.personelinfo\">\n" +
    "    <div class=\"starter-template\">\n" +
    "    \n" +
    "        <!-- table view -->\n" +
    "         <table class=\"table table-bordered\" style=\"background-color:#fff;\">\n" +
    "          <thead>\n" +
    "            <tr>\n" +
    "              <th colspan=\"2\">\n" +
    "              	<label>\n" +
    "                	<input type=\"checkbox\" style=\"zoom:1.5; margin:5px 0 0 8px;\">\n" +
    "                    Hepsini Seç2\n" +
    "              	</label>\n" +
    "              </th>\n" +
    "              <th>First Name</th>\n" +
    "              <th>Last Name</th>\n" +
    "              <th>Username</th>\n" +
    "            </tr>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "            <tr>\n" +
    "              <td width=\"60\">\n" +
    "              	<label>\n" +
    "                	<input type=\"checkbox\" style=\"zoom:1.5; margin:5px 0 0 8px;\">\n" +
    "                </label>\n" +
    "              </td>\n" +
    "              <th scope=\"row\" style=\"text-align:center\">1</th>\n" +
    "              <td>Mark</td>\n" +
    "              <td>Otto</td>\n" +
    "              <td>@mdo</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>\n" +
    "              	<label>\n" +
    "                	<input type=\"checkbox\" style=\"zoom:1.5; margin:5px 0 0 8px;\">\n" +
    "              	</label>\n" +
    "              </td>\n" +
    "              <th scope=\"row\" style=\"text-align:center\">2</th>\n" +
    "              <td>Jacob</td>\n" +
    "              <td>Thornton</td>\n" +
    "              <td>@fat</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>\n" +
    "              	<label>\n" +
    "                	<input type=\"checkbox\" style=\"zoom:1.5; margin:5px 0 0 8px;\">\n" +
    "              	</label>\n" +
    "              </td>\n" +
    "              <th scope=\"row\" style=\"text-align:center\">3</th>\n" +
    "              <td>Larry</td>\n" +
    "              <td>the Bird</td>\n" +
    "              <td>@twitter</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td width=\"60\">\n" +
    "              	<label>\n" +
    "                	<input type=\"checkbox\" style=\"zoom:1.5; margin:5px 0 0 8px;\">\n" +
    "                </label>\n" +
    "              </td>\n" +
    "              <th scope=\"row\" style=\"text-align:center\">4</th>\n" +
    "              <td>Mark</td>\n" +
    "              <td>Otto</td>\n" +
    "              <td>@mdo</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>\n" +
    "              	<label>\n" +
    "                	<input type=\"checkbox\" style=\"zoom:1.5; margin:5px 0 0 8px;\">\n" +
    "              	</label>\n" +
    "              </td>\n" +
    "              <th scope=\"row\" style=\"text-align:center\">5</th>\n" +
    "              <td>Jacob</td>\n" +
    "              <td>Thornton</td>\n" +
    "              <td>@fat</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>\n" +
    "              	<label>\n" +
    "                	<input type=\"checkbox\" style=\"zoom:1.5; margin:5px 0 0 8px;\">\n" +
    "              	</label>\n" +
    "              </td>\n" +
    "              <th scope=\"row\" style=\"text-align:center\">6</th>\n" +
    "              <td>Larry</td>\n" +
    "              <td>the Bird</td>\n" +
    "              <td>@twitter</td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "        <!-- end of table view -->\n" +
    "        \n" +
    "       <div class=\"btn-group\">\n" +
    "          <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "            İşlemler <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li><a href=\"\">İşlem 1</a></li>\n" +
    "            <li><a href=\"\">İşlem 2</a></li>\n" +
    "            <li><a href=\"\">İşlem 3</a></li>\n" +
    "            <li role=\"separator\" class=\"divider\"></li>\n" +
    "            <li><a href=\"\">İşlem 4</a></li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "        \n" +
    "        \n" +
    "        <hr>\n" +
    "\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/staff/templates/add.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/staff/templates/add.html",
    "<div ng-app=\"ulakbus.staff\">\n" +
    "    <ng-include src=\"'shared/templates/add.html'\"></ng-include>\n" +
    "</div>");
}]);

angular.module("components/staff/templates/edit.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/staff/templates/edit.html",
    "<div ng-app=\"ulakbus.staff\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <h1>{{ schema.title }}</h1>\n" +
    "        <form name=\"formgenerated\" sf-schema=\"schema\" sf-form=\"form\" sf-model=\"model\" ng-submit=\"onSubmit(formgenerated)\"></form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/staff/templates/list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/staff/templates/list.html",
    "<table class=\"table table-bordered table-responsive\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        <!--<th>{{ staffs[0].key }}</th>-->\n" +
    "        <th ng-repeat=\"(key,value) in staffs[0].data\">{{ key }}</th>\n" +
    "        <th>action</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "    <tr ng-repeat=\"staff in staffs\">\n" +
    "        <!--<td><a ng-href=\"#/staff/{{staff.id}}\">{{staff.name}}</a></td>-->\n" +
    "        <td ng-repeat=\"(key,value) in staff.data\">{{value}}</td>\n" +
    "        <td>\n" +
    "            <a ng-href=\"#/staff/edit/{{staff.key}}\">Edit</a><br>\n" +
    "            <a ng-href=\"#/staff/{{staff.key}}\">Show</a>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    </tbody>\n" +
    "</table>");
}]);

angular.module("components/staff/templates/show.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/staff/templates/show.html",
    "<p ng-repeat=\"(key, value) in staff\"><span class=\"col-md-3\">{{ key }}:</span>{{\n" +
    "    value}}</p>");
}]);

angular.module("components/student/student_add_template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/student/student_add_template.html",
    "<div ng-app=\"ulakbus.student\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <h1>{{ schema.title }}</h1>\n" +
    "        <form name=\"formgenerated\" sf-schema=\"schema\" sf-form=\"form\" sf-model=\"model\" ng-submit=\"onSubmit(formgenerated)\"></form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/student/student_list_template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/student/student_list_template.html",
    "<table class=\"table table-bordered\">\n" +
    "    <thead>\n" +
    "        <tr>\n" +
    "            <th ng-repeat=\"(key,value) in students[0]\">{{ key }}</th>\n" +
    "        </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "        <tr ng-repeat=\"student in students\">\n" +
    "            <td ng-repeat=\"(key,value) in student\">{{value}}</td>\n" +
    "            <td><a ng-href=\"#/s/edit/{{student.id}}\">Edit</a></td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>");
}]);

angular.module("components/types/types_template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/types/types_template.html",
    "<div ng-app=\"ulakbus.types\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <h1>{{ schema.title }}</h1>\n" +
    "        <form name=\"formgenerated\" sf-schema=\"schema\" sf-form=\"form\" sf-model=\"model\" ng-submit=\"onSubmit(formgenerated)\"></form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("shared/templates/add.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/templates/add.html",
    "<div class=\"col-md-12\">\n" +
    "    <h1>{{ schema.title }}</h1>\n" +
    "    <button type=\"button\" ng-repeat=\"node in listnodes\" ng-click=\"openmodal(node)\">Add <span>{{node}}</span></button>\n" +
    "    <form name=\"formgenerated\" sf-schema=\"schema\" sf-form=\"form\" sf-model=\"model\" ng-submit=\"onSubmit(formgenerated)\"></form>\n" +
    "</div>");
}]);

angular.module("shared/templates/directives/chat.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/templates/directives/chat.html",
    "<div class=\"chat-panel panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <i class=\"fa fa-comments fa-fw\"></i>\n" +
    "        Chat\n" +
    "        <div class=\"btn-group pull-right\">\n" +
    "            <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "                <i class=\"fa fa-chevron-down\"></i>\n" +
    "            </button>\n" +
    "            <ul class=\"dropdown-menu slidedown\">\n" +
    "                <li>\n" +
    "                    <a href=\"#\">\n" +
    "                        <i class=\"fa fa-refresh fa-fw\"></i> Refresh\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <a href=\"#\">\n" +
    "                        <i class=\"fa fa-check-circle fa-fw\"></i> Available\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <a href=\"#\">\n" +
    "                        <i class=\"fa fa-times fa-fw\"></i> Busy\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <a href=\"#\">\n" +
    "                        <i class=\"fa fa-clock-o fa-fw\"></i> Away\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li>\n" +
    "                    <a href=\"#\">\n" +
    "                        <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- /.panel-heading -->\n" +
    "    <div class=\"panel-body\">\n" +
    "        <ul class=\"chat\">\n" +
    "            <li class=\"left clearfix\">\n" +
    "                <span class=\"chat-img pull-left\">\n" +
    "                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n" +
    "                </span>\n" +
    "                <div class=\"chat-body clearfix\">\n" +
    "                    <div class=\"header\">\n" +
    "                        <strong class=\"primary-font\">Jack Sparrow</strong>\n" +
    "                        <small class=\"pull-right text-muted\">\n" +
    "                            <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago\n" +
    "                        </small>\n" +
    "                    </div>\n" +
    "                    <p>\n" +
    "                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "            <li class=\"right clearfix\">\n" +
    "                <span class=\"chat-img pull-right\">\n" +
    "                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n" +
    "                </span>\n" +
    "                <div class=\"chat-body clearfix\">\n" +
    "                    <div class=\"header\">\n" +
    "                        <small class=\" text-muted\">\n" +
    "                            <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago</small>\n" +
    "                            <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n" +
    "                    </div>\n" +
    "                    <p>\n" +
    "                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "            <li class=\"left clearfix\">\n" +
    "                <span class=\"chat-img pull-left\">\n" +
    "                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n" +
    "                </span>\n" +
    "                <div class=\"chat-body clearfix\">\n" +
    "                    <div class=\"header\">\n" +
    "                        <strong class=\"primary-font\">Jack Sparrow</strong>\n" +
    "                        <small class=\"pull-right text-muted\">\n" +
    "                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago</small>\n" +
    "                        </div>\n" +
    "                        <p>\n" +
    "                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n" +
    "                        </p>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "            <li class=\"right clearfix\">\n" +
    "                <span class=\"chat-img pull-right\">\n" +
    "                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n" +
    "                </span>\n" +
    "                <div class=\"chat-body clearfix\">\n" +
    "                    <div class=\"header\">\n" +
    "                        <small class=\" text-muted\">\n" +
    "                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago</small>\n" +
    "                            <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n" +
    "                    </div>\n" +
    "                    <p>\n" +
    "                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "                <!-- /.panel-body -->\n" +
    "    <div class=\"panel-footer\">\n" +
    "        <div class=\"input-group\">\n" +
    "            <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\">\n" +
    "            <span class=\"input-group-btn\">\n" +
    "                <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\n" +
    "                    Send\n" +
    "                </button>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- /.panel-footer -->\n" +
    "</div>");
}]);

angular.module("shared/templates/directives/header-notification.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/templates/directives/header-notification.html",
    "<ul class=\"nav navbar-top-links navbar-right\">\n" +
    "    <li class=\"dropdown\">\n" +
    "        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "            <i class=\"fa fa-envelope fa-fw\"></i>  <i class=\"fa fa-caret-down\"></i>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu dropdown-messages\">\n" +
    "            <li>\n" +
    "                <a href=\"#\">\n" +
    "                    <div>\n" +
    "                        <strong>John Smith</strong>\n" +
    "                        <span class=\"pull-right text-muted\">\n" +
    "                            <em>Yesterday</em>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li>\n" +
    "                <a href=\"#\">\n" +
    "                    <div>\n" +
    "                        <strong>John Smith</strong>\n" +
    "                        <span class=\"pull-right text-muted\">\n" +
    "                            <em>Yesterday</em>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li>\n" +
    "                <a href=\"#\">\n" +
    "                    <div>\n" +
    "                        <strong>John Smith</strong>\n" +
    "                        <span class=\"pull-right text-muted\">\n" +
    "                            <em>Yesterday</em>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li>\n" +
    "                <a class=\"text-center\" href=\"#\">\n" +
    "                    <strong>Read All Messages</strong>\n" +
    "                    <i class=\"fa fa-angle-right\"></i>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <!-- /.dropdown-messages -->\n" +
    "    </li>\n" +
    "    <!-- /.dropdown -->\n" +
    "    <li class=\"dropdown\">\n" +
    "        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "            <i class=\"fa fa-tasks fa-fw\"></i>  <i class=\"fa fa-caret-down\"></i>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu dropdown-tasks\">\n" +
    "            <li>\n" +
    "                <a href=\"#\">\n" +
    "                    <div>\n" +
    "                        <p>\n" +
    "                            <strong>Task 1</strong>\n" +
    "                            <span class=\"pull-right text-muted\">40% Complete</span>\n" +
    "                        </p>\n" +
    "                        <div class=\"progress progress-striped active\">\n" +
    "                            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\n" +
    "                                <span class=\"sr-only\">40% Complete (success)</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li>\n" +
    "                <a href=\"#\">\n" +
    "                    <div>\n" +
    "                        <p>\n" +
    "                            <strong>Task 2</strong>\n" +
    "                            <span class=\"pull-right text-muted\">20% Complete</span>\n" +
    "                        </p>\n" +
    "                        <div class=\"progress progress-striped active\">\n" +
    "                            <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\n" +
    "                                <span class=\"sr-only\">20% Complete</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li>\n" +
    "                <a href=\"#\">\n" +
    "                    <div>\n" +
    "                        <p>\n" +
    "                            <strong>Task 3</strong>\n" +
    "                            <span class=\"pull-right text-muted\">60% Complete</span>\n" +
    "                        </p>\n" +
    "                        <div class=\"progress progress-striped active\">\n" +
    "                            <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\">\n" +
    "                                <span class=\"sr-only\">60% Complete (warning)</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li>\n" +
    "                <a href=\"#\">\n" +
    "                    <div>\n" +
    "                        <p>\n" +
    "                            <strong>Task 4</strong>\n" +
    "                            <span class=\"pull-right text-muted\">80% Complete</span>\n" +
    "                        </p>\n" +
    "                        <div class=\"progress progress-striped active\">\n" +
    "                            <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\n" +
    "                                <span class=\"sr-only\">80% Complete (danger)</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li>\n" +
    "                <a class=\"text-center\" href=\"#\">\n" +
    "                    <strong>See All Tasks</strong>\n" +
    "                    <i class=\"fa fa-angle-right\"></i>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <!-- /.dropdown-tasks -->\n" +
    "    </li>\n" +
    "    <!-- /.dropdown -->\n" +
    "    <li class=\"dropdown\">\n" +
    "        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "            <i class=\"fa fa-bell fa-fw\"></i>  <i class=\"fa fa-caret-down\"></i>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu dropdown-alerts\">\n" +
    "            <li>\n" +
    "                <a href=\"#\">\n" +
    "                    <div>\n" +
    "                        <i class=\"fa fa-comment fa-fw\"></i> New Comment\n" +
    "                        <span class=\"pull-right text-muted small\">4 minutes ago</span>\n" +
    "                    </div>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li>\n" +
    "                <a href=\"#\">\n" +
    "                    <div>\n" +
    "                        <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n" +
    "                        <span class=\"pull-right text-muted small\">12 minutes ago</span>\n" +
    "                    </div>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li>\n" +
    "                <a href=\"#\">\n" +
    "                    <div>\n" +
    "                        <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\n" +
    "                        <span class=\"pull-right text-muted small\">4 minutes ago</span>\n" +
    "                    </div>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li>\n" +
    "                <a href=\"#\">\n" +
    "                    <div>\n" +
    "                        <i class=\"fa fa-tasks fa-fw\"></i> New Task\n" +
    "                        <span class=\"pull-right text-muted small\">4 minutes ago</span>\n" +
    "                    </div>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li>\n" +
    "                <a href=\"#\">\n" +
    "                    <div>\n" +
    "                        <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n" +
    "                        <span class=\"pull-right text-muted small\">4 minutes ago</span>\n" +
    "                    </div>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li>\n" +
    "                <a class=\"text-center\" href=\"#\">\n" +
    "                    <strong>See All Alerts</strong>\n" +
    "                    <i class=\"fa fa-angle-right\"></i>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <!-- /.dropdown-alerts -->\n" +
    "    </li>\n" +
    "    <!-- /.dropdown -->\n" +
    "    <li class=\"dropdown\">\n" +
    "        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "            <i class=\"fa fa-user fa-fw\"></i>  <i class=\"fa fa-caret-down\"></i>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu dropdown-user\">\n" +
    "            <li><a href=\"#\"><i class=\"fa fa-user fa-fw\"></i> User Profile</a>\n" +
    "            </li>\n" +
    "            <li><a href=\"#\"><i class=\"fa fa-gear fa-fw\"></i> Settings</a>\n" +
    "            </li>\n" +
    "            <li><a href=\"http://www.strapui.com/\"><i class=\"fa fa-eye fa-fw\"></i> Premium Angular Themes</a></li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li><a ui-sref=\"login\" href=\"javascript:void(0);\" logout><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <!-- /.dropdown-user -->\n" +
    "    </li>\n" +
    "    <!-- /.dropdown -->\n" +
    "</ul>\n" +
    "\n" +
    "");
}]);

angular.module("shared/templates/directives/notifications.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/templates/directives/notifications.html",
    "<div class=\"panel-body\">\n" +
    "    <div class=\"list-group\">\n" +
    "        <a href=\"#\" class=\"list-group-item\">\n" +
    "            <i class=\"fa fa-comment fa-fw\"></i> New Comment\n" +
    "            <span class=\"pull-right text-muted small\"><em>4 minutes ago</em>\n" +
    "            </span>\n" +
    "        </a>\n" +
    "        <a href=\"#\" class=\"list-group-item\">\n" +
    "            <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n" +
    "            <span class=\"pull-right text-muted small\"><em>12 minutes ago</em>\n" +
    "            </span>\n" +
    "        </a>\n" +
    "        <a href=\"#\" class=\"list-group-item\">\n" +
    "            <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\n" +
    "            <span class=\"pull-right text-muted small\"><em>27 minutes ago</em>\n" +
    "            </span>\n" +
    "        </a>\n" +
    "        <a href=\"#\" class=\"list-group-item\">\n" +
    "            <i class=\"fa fa-tasks fa-fw\"></i> New Task\n" +
    "            <span class=\"pull-right text-muted small\"><em>43 minutes ago</em>\n" +
    "            </span>\n" +
    "        </a>\n" +
    "        <a href=\"#\" class=\"list-group-item\">\n" +
    "            <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n" +
    "            <span class=\"pull-right text-muted small\"><em>11:32 AM</em>\n" +
    "            </span>\n" +
    "        </a>\n" +
    "        <a href=\"#\" class=\"list-group-item\">\n" +
    "            <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\n" +
    "            <span class=\"pull-right text-muted small\"><em>11:13 AM</em>\n" +
    "            </span>\n" +
    "        </a>\n" +
    "        <a href=\"#\" class=\"list-group-item\">\n" +
    "            <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\n" +
    "            <span class=\"pull-right text-muted small\"><em>10:57 AM</em>\n" +
    "            </span>\n" +
    "        </a>\n" +
    "        <a href=\"#\" class=\"list-group-item\">\n" +
    "            <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n" +
    "            <span class=\"pull-right text-muted small\"><em>9:49 AM</em>\n" +
    "            </span>\n" +
    "        </a>\n" +
    "        <a href=\"#\" class=\"list-group-item\">\n" +
    "            <i class=\"fa fa-money fa-fw\"></i> Payment Received\n" +
    "            <span class=\"pull-right text-muted small\"><em>Yesterday</em>\n" +
    "            </span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <!-- /.list-group -->\n" +
    "    <a href=\"#\" class=\"btn btn-default btn-block\">View All Alerts</a>\n" +
    "</div>");
}]);

angular.module("shared/templates/directives/sidebar-search.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/templates/directives/sidebar-search.html",
    "");
}]);

angular.module("shared/templates/directives/sidebar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/templates/directives/sidebar.html",
    "<div class=\"navbar-default sidebar\" role=\"navigation\">\n" +
    "    <div class=\"sidebar-nav navbar-collapse\">\n" +
    "    	<div class=\"brand\">\n" +
    "        	<a href=\"\" class=\"logo\"><img src=\"../../../img/brand-logo.png\" /></a>\n" +
    "        </div>\n" +
    "        <ul class=\"nav in\" id=\"side-menu\">\n" +
    "            <sidebar-search></sidebar-search>\n" +
    "            <li ui-sref-active=\"active\">\n" +
    "                <a href=\"#/dashboard\"><i class=\"fa fa-dashboard fa-fw\"></i> Dashboard</a>\n" +
    "            </li>\n" +
    "            <li ng-repeat=\"(key, item) in menuItems\" ng-class=\"{active: collapseVar == key}\">{{dropDown}}\n" +
    "                <a href=\"\" ng-click=\"check(key)\"><i class=\"fa fa-wrench fa-fw\"></i> {{ item }}<span\n" +
    "                        class=\"fa arrow\"></span></a>\n" +
    "                <ul class=\"nav nav-second-level\" collapse=\"collapseVar!={{key}}\">\n" +
    "                    <li ui-sref-active=\"active\">\n" +
    "                        <a href=\"#/crud/{{item}}\">List</a>\n" +
    "                    </li>\n" +
    "                    <li ui-sref-active=\"active\">\n" +
    "                        <a href=\"#/crud/{{item}}/add\">Add</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "                <!-- /.nav-second-level -->\n" +
    "            </li>\n" +
    "            <!--<li ng-class=\"{active: collapseVar==2}\">-->\n" +
    "                <!--<a href=\"\" ng-click=\"check(2)\"><i class=\"fa fa-sitemap fa-fw\"></i> Multi-Level Dropdown<span-->\n" +
    "                        <!--class=\"fa arrow\"></span></a>-->\n" +
    "                <!--<ul class=\"nav nav-second-level\" collapse=\"collapseVar!=2\">-->\n" +
    "                    <!--<li>-->\n" +
    "                        <!--<a href=\"\">Second Level Item</a>-->\n" +
    "                    <!--</li>-->\n" +
    "                    <!--<li>-->\n" +
    "                        <!--<a href=\"\">Second Level Item</a>-->\n" +
    "                    <!--</li>-->\n" +
    "                    <!--<li ng-init=\"third=!third\" ng-class=\"{active: multiCollapseVar==3}\">-->\n" +
    "                        <!--<a href=\"\" ng-click=\"multiCheck(3)\">Third Level <span class=\"fa arrow\"></span></a>-->\n" +
    "                        <!--<ul class=\"nav nav-third-level\" collapse=\"multiCollapseVar!=3\">-->\n" +
    "                            <!--<li>-->\n" +
    "                                <!--<a href=\"\">Third Level Item</a>-->\n" +
    "                            <!--</li>-->\n" +
    "                            <!--<li>-->\n" +
    "                                <!--<a href=\"\">Third Level Item</a>-->\n" +
    "                            <!--</li>-->\n" +
    "                            <!--<li>-->\n" +
    "                                <!--<a href=\"\">Third Level Item</a>-->\n" +
    "                            <!--</li>-->\n" +
    "                            <!--<li>-->\n" +
    "                                <!--<a href=\"\">Third Level Item</a>-->\n" +
    "                            <!--</li>-->\n" +
    "\n" +
    "                        <!--</ul>-->\n" +
    "                        <!--&lt;!&ndash; /.nav-third-level &ndash;&gt;-->\n" +
    "                    <!--</li>-->\n" +
    "                <!--</ul>-->\n" +
    "                <!--&lt;!&ndash; /.nav-second-level &ndash;&gt;-->\n" +
    "            <!--</li>-->\n" +
    "            <!--<li ng-class=\"{active:collapseVar==4}\">-->\n" +
    "                <!--<a href=\"\" ng-click=\"check(4)\"><i class=\"fa fa-files-o fa-fw\"></i> Sample Pages<span-->\n" +
    "                        <!--class=\"fa arrow\"></span></a>-->\n" +
    "                <!--<ul class=\"nav nav-second-level\" collapse=\"collapseVar!=4\">-->\n" +
    "                    <!--<li ng-class=\"{active: selectedMenu=='blank'}\">-->\n" +
    "                        <!--<a ui-sref=\"dashboard.blank\" ng-click=\"selectedMenu='blank'\">Blank Page</a>-->\n" +
    "                    <!--</li>-->\n" +
    "                    <!--<li>-->\n" +
    "                        <!--<a ui-sref=\"login\">Login Page</a>-->\n" +
    "                    <!--</li>-->\n" +
    "                <!--</ul>-->\n" +
    "                <!--&lt;!&ndash; /.nav-second-level &ndash;&gt;-->\n" +
    "            <!--</li>-->\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <!-- /.sidebar-collapse -->\n" +
    "</div>\n" +
    "");
}]);

angular.module("shared/templates/directives/stats.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/templates/directives/stats.html",
    "<div class=\"col-lg-3 col-md-6\">\n" +
    "    <div class=\"panel panel-{{colour}}\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-3\">\n" +
    "                    <i class=\"fa fa-{{type}} fa-5x\"></i>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-9 text-right\">\n" +
    "                    <div class=\"huge\">{{number}}</div>\n" +
    "                    <div>{{comments}}</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <a ui-sref=\"{{goto}}\">\n" +
    "            <div class=\"panel-footer\">\n" +
    "                <span class=\"pull-left\">View Details</span>\n" +
    "                <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n" +
    "                <div class=\"clearfix\"></div>\n" +
    "            </div>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("shared/templates/directives/timeline.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/templates/directives/timeline.html",
    "<div class=\"panel-body\">\n" +
    "    <ul class=\"timeline\">\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i>\n" +
    "            </div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n" +
    "                    <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "                <div class=\"timeline-body\">\n" +
    "                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i>\n" +
    "            </div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n" +
    "                </div>\n" +
    "                <div class=\"timeline-body\">\n" +
    "                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>\n" +
    "                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\n" +
    "            </div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n" +
    "                </div>\n" +
    "                <div class=\"timeline-body\">\n" +
    "                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n" +
    "                </div>\n" +
    "                <div class=\"timeline-body\">\n" +
    "                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\n" +
    "            </div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n" +
    "                </div>\n" +
    "                <div class=\"timeline-body\">\n" +
    "                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>\n" +
    "                    <hr>\n" +
    "                    <div class=\"btn-group\">\n" +
    "                        <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "                            <i class=\"fa fa-gear\"></i>  <span class=\"caret\"></span>\n" +
    "                        </button>\n" +
    "                        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "                            <li><a href=\"#\">Action</a>\n" +
    "                            </li>\n" +
    "                            <li><a href=\"#\">Another action</a>\n" +
    "                            </li>\n" +
    "                            <li><a href=\"#\">Something else here</a>\n" +
    "                            </li>\n" +
    "                            <li class=\"divider\"></li>\n" +
    "                            <li><a href=\"#\">Separated link</a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n" +
    "                </div>\n" +
    "                <div class=\"timeline-body\">\n" +
    "                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li class=\"timeline-inverted\">\n" +
    "            <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\n" +
    "            </div>\n" +
    "            <div class=\"timeline-panel\">\n" +
    "                <div class=\"timeline-heading\">\n" +
    "                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n" +
    "                </div>\n" +
    "                <div class=\"timeline-body\">\n" +
    "                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>");
}]);

angular.module("shared/templates/fieldset.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/templates/fieldset.html",
    "<fieldset ng-disabled=\"form.readonly\" class=\"schema-form-fieldset {{form.htmlClass}}\">\n" +
    "    <legend ng-class=\"{'sr-only': !showTitle() }\">\n" +
    "        <span ng-click=\"isCollapsed = !isCollapsed\">{{ form.title }}</span>\n" +
    "    </legend>\n" +
    "    <div collapse=\"isCollapsed\" name=\"{{form.title}}\">\n" +
    "        <div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div>\n" +
    "        <sf-decorator class=\"col-md-4\" ng-repeat=\"item in form.items\" ng-if=\"item.name!='idx'\" form=\"item\"></sf-decorator>\n" +
    "    </div>\n" +
    "</fieldset>\n" +
    "");
}]);

angular.module("shared/templates/foreignKey.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/templates/foreignKey.html",
    "<div class=\"form-group {{form.htmlClass}} schema-form-select col-md-12\"\n" +
    "     ng-class=\"{'has-error': form.disableErrorState !== true && hasError(), 'has-success': form.disableSuccessState !== true && hasSuccess(), 'has-feedback': form.feedback !== false}\">\n" +
    "    <div class=\"col-md-8\">\n" +
    "        <label class=\"control-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">\n" +
    "            {{form.title}}\n" +
    "        </label>\n" +
    "\n" +
    "        <select ng-model=\"$$value$$\"\n" +
    "                ng-model-options=\"form.ngModelOptions\"\n" +
    "                ng-disabled=\"form.readonly\"\n" +
    "                sf-changed=\"form\"\n" +
    "                class=\"form-control {{form.fieldHtmlClass}}\"\n" +
    "                schema-validate=\"form\"\n" +
    "                ng-options=\"item.value as item.name group by item.group for item in form.titleMap\"\n" +
    "                name=\"{{form.key.slice(-1)[0]}}\">\n" +
    "        </select>\n" +
    "\n" +
    "\n" +
    "        <div class=\"help-block\" sf-message=\"form.description\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <a href=\"javascript:void(0);\" add-modal>\n" +
    "            <i class=\"fa fa-plus-circle fa-fw\"></i>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("shared/templates/linkedModelModalContent.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/templates/linkedModelModalContent.html",
    "<div class=\"modal-body\">\n" +
    "    <form name=\"linkedModelForm\" sf-schema=\"schema\" sf-form=\"form\" sf-model=\"model\" ng-submit=\"onSubmit(linkedModelForm)\"></form>\n" +
    "</div>");
}]);

angular.module("shared/templates/listnodeModalContent.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/templates/listnodeModalContent.html",
    "<div class=\"modal-body\">\n" +
    "    <form name=\"listnodeform\" sf-schema=\"schema\" sf-form=\"form\" sf-model=\"model\"></form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"onSubmit(listnodeform)\">OK</button>\n" +
    "    <button type=\"button\" class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button>\n" +
    "</div>");
}]);

angular.module("shared/templates/modalContent.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/templates/modalContent.html",
    "");
}]);