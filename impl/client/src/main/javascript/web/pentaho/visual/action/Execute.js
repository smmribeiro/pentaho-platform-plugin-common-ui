/*!
 * Copyright 2010 - 2019 Hitachi Vantara. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define([
  "pentaho/module!_",
  "./Interaction",
  "./mixins/Data",
  "./mixins/Positioned"
], function(module, Interaction, DataActionMixin, PositionedActionMixin) {

  "use strict";

  /**
   * @name Execute
   * @memberOf pentaho.visual.action
   * @class
   * @extends pentaho.visual.action.Base
   * @extends pentaho.visual.action.mixins.Data
   * @extends pentaho.visual.action.mixins.Positioned
   *
   * @amd pentaho/visual/action/Execute
   *
   * @classDesc The `Execute` action is a synchronous, data and positioned action that
   * is performed when the user interacts with a visual element,
   * typically by double clicking it.
   *
   * @example
   *
   * define(["pentaho/visual/action/Execute"], function(ExecuteAction) {
   *
   *   // ...
   *
   *   // Listen to the execute event
   *   model.on(ExecuteAction.id, {
   *
   *     do: function(action) {
   *
   *       var dataFilter = action.dataFilter;
   *
   *       alert("Executed on rows where " + (dataFilter && dataFilter.$contentKey));
   *
   *       // Mark action as done.
   *       action.done();
   *     }
   *   });
   *
   *   // ...
   *
   *   // Act "execute" on data rows that have "country" = "us".
   *
   *   model.act(new ExecuteAction({
   *     dataFilter: {
   *       _: "=",
   *       p: "country",
   *       v: "us"
   *     }
   *   });
   * });
   *
   * @description Creates an _execute_ action given its specification.
   * @param {pentaho.visual.action.spec.IExecute} [spec] An _execute_ action specification.
   * @constructor
   *
   * @see pentaho.visual.action.spec.IExecute
   */
  return Interaction.extend(module.id, /** @lends pentaho.visual.action.Execute# */{

  }, /** @lends pentaho.visual.action.Execute */{
    /** @inheritDoc */
    get id() {
      return module.id;
    }
  })
  .mix(DataActionMixin)
  .mix(PositionedActionMixin);
});
