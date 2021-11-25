import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// @ = 데코레이터 클래스를 다르게 실행한다.
// JS가 데코레이터를 만나게되면 import한 함수를 가르키게 된다.
// !: === 반드시 포함한다.
// ?: === 있으면 포함하고 없으면 제외한다.
@Entity()
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment") //데이터를 ㅣ중복할수 없기에 만들업
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "integer" })
  age!: number;

  @Column({ type: "timestamp", default: null, nullable: true }) // timestamp???
  deletedAt?: Date;
}
