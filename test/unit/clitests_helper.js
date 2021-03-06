/* Copyright 2018 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { setVerbosityLevel, VerbosityLevel } from '../../src/shared/util';
import isNodeJS from '../../src/shared/is_node';
import { PDFNodeStream } from '../../src/display/node_stream';
import { setPDFNetworkStreamFactory } from '../../src/display/api';

// Ensure that this script only runs in Node.js environments.
if (!isNodeJS()) {
  throw new Error('The `gulp unittestcli` command can only be used in ' +
                  'Node.js environments.');
}

// Reduce the amount of console "spam", by ignoring `info`/`warn` calls,
// when running the unit-tests in Node.js/Travis.
setVerbosityLevel(VerbosityLevel.ERRORS);

// Set the network stream factory for the unit-tests.
setPDFNetworkStreamFactory(function(params) {
  return new PDFNodeStream(params);
});
