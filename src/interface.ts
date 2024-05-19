export interface Driver {
  database: string;
  pass: string;
  port: number;

  conect(): void;
  desconect(): void;
  status(): boolean;
}

class PostgresDriver implements Driver {
  database = 'string';
  pass = 'string';
  port = 10;

  conect(): void { }

  desconect(): void { }

  status(): boolean {
    return true;
  }
}
