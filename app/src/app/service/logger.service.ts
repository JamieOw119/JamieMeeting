/*
 * Copyright (c) 2020 jamie<1139937387@qq.com>
 *
 * This program is free software: you can use, redistribute, and/or modify
 * it under the terms of the GNU Affero General Public License, version 3
 * or later ("AGPL"), as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
import { Injectable } from '@angular/core';
import debug from 'debug';

const APP_NAME = 'WiLearning';
localStorage.debug = 'mediasoup-client:* WiLearning:*';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private pDebug: any;
  private pWarn: any;
  private pError: any;

  constructor(
  ) {
    this.pDebug = debug(`${APP_NAME}:DEBUG`);
    this.pWarn = debug(`${APP_NAME}:WARN`);
    this.pError = debug(`${APP_NAME}:ERROR`);

    // tslint:disable-next-line: no-console
    this.pDebug.log = console.info.bind(console);
    this.pWarn.log = console.warn.bind(console);
    this.pError.log = console.error.bind(console);
  }

  get debug() {
    return this.pDebug;
  }

  get warn() {
    return this.pWarn;
  }

  get error() {
    return this.pError;
  }
}
