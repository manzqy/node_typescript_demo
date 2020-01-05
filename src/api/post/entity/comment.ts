import {Entity, Column, JoinColumn, OneToOne, ManyToOne, CreateDateColumn, PrimaryGeneratedColumn} from "typeorm";
import User from "../../user/entity/user";
import Post from "./post";

@Entity()
export default class PostComment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne(type => PostComment)
    parent: PostComment

    @ManyToOne(type => User, user => user.post_comments)
    user: User;

    @ManyToOne(type => Post, post => post.comments)
    post: Post;

    @CreateDateColumn()
    create_date: Date;
}