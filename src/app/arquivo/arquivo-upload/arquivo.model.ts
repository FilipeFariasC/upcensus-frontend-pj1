
export type Timestamp = Date | string;

export enum ExitCodeEnum {
  unknown = 'UNKNOWN',
  executing = 'EXECUTING',
  completed = 'COMPLETED',
  noOp = 'NOOP',
  failed = 'FAILED',
  stopped = 'STOPPED'
}

export type ExitCode = `${ExitCodeEnum}`;

export interface ExitStatus {
  exitCode: ExitStatus,
  exitDescription: string,
  running: boolean
}

export interface JobResponse {
  originalFile: string,
  resultFile: string,
  creationTime: Timestamp,
  startTime: Timestamp,
  finishTime: Timestamp,
  status: ExitStatus
}
