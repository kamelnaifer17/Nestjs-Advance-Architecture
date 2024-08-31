export class AlarmSeverity {
  constructor(public value: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL') {}

  equals(security: AlarmSeverity) {
    return this.value === security.value;
  }

  toJSON() {
    return this.value;
  }
}
