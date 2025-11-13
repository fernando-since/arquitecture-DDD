export interface userProps {
  id: string;
  name: string;
  lastName: string;
  email: string;
  active?: boolean;
}

export class User {
  private readonly _id: string;
  private _name: string;
  private _lastName: string;
  private _email: string;
  private _active: boolean;

  constructor(props: userProps) {
    this._id = props.id;
    this._name = props.name;
    this._lastName = props.lastName;
    this._email = props.email;
    this._active = props.active ?? true;
  }

  /**
   *  Getters
   */

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get lastName(): string {
    return this._lastName;
  }
  get email(): string {
    return this._email;
  }
  get active(): boolean {
    return this._active;
  }

  /**
   * Metodos
   */

  rename(newName: string): void {
    if (!newName.trim()) throw new Error("El nombre no puede estar vacío");
    this._name = newName;
  }

  changeEmail(newEmail: string): void {
    if (!newEmail.includes("@")) throw new Error("Email invalido");
    this._email = newEmail;
  }

  desactivate(): void {
    this._active = false;
  }

  activate(): void {
    this._active = true;
  }
}
