export class Cartoon {
  id: number;
  nome: string;
  foto: string;
  descricao: string;

  constructor(id: number, nome: string, foto: string, descricao: string) {
    this.id = id;
    this.nome = nome;
    this.foto = foto;
    this.descricao = descricao;
  }

  static fromJson(json: any[]): Cartoon[] {
    let cartoons: Cartoon[] = [];
    json.forEach((cartoon) => {
      cartoons.push(
        new Cartoon(cartoon.id, cartoon.nome, cartoon.foto, cartoon.descricao)
      );
    });
    return cartoons;
  }

  toJson() {
    return {
      id: this.id,
      nome: this.nome,
      foto: this.foto,
      descricao: this.descricao,
    };
  }
}
