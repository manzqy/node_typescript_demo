import {Entity, Column, CreateDateColumn, ManyToOne, OneToMany, ManyToMany, JoinTable, PrimaryGeneratedColumn} from "typeorm";
import User from "../../user/entity/user";
import Category from "../../category/entity/category";
import Upload from "../../upload/entity/upload";
import Comment from "./comment";

@Entity()
export default class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column("text")
    content: string;

    @Column({type: 'int', default: 1})
    type: number

    @Column({type: 'int', default: 1})
    open: number

    @ManyToMany(type => Upload)
    @JoinTable()
    cover: Upload[];

    @ManyToOne(type => User, user => user.posts)
    user: User;

    @OneToMany(type => Comment, comment => comment.post)
    comments: Comment[];

    @ManyToMany(type => User, user => user.like_posts)
    @JoinTable()
    like_users: User[];

    @ManyToMany(type => Category, category => category.posts)
    @JoinTable()
    categories: Category[];

    @CreateDateColumn()
    create_date: Date;
}