/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const execa = require(`execa`);
const path = require(`path`);
const {assert} = require('chai');

const cmd = `node vms_api.js`;
const cwd = path.join(__dirname, `..`);

describe('should retrieve list of vms via api', () => {
  it('vms_api_inspect_string', async () => {
    const {stdout} = await execa.shell(cmd, {cwd});
    assert.match(stdout, /^VMs:/);
  });
});