"use client"
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardTitle } from '../components/ui/card';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string | Date;
    imageUrl: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? 'bg-black text-white' :  ' bg-black text-white'
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={1000} // Replace with desired width
        height={600} // Replace with desired height
        className="w-full object-cover rounded-t-lg"
      />
      <CardTitle className="text-xl font-normal mt-4 text-slate-500  text-center">
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>
      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/posts/${post.id}`}
          className={`w-full px-8 py-2 h-12 text-white rounded hover:bg-slate-500 ${
            isDarkBackground ? 'bg-slate-500' : 'bg-slate-500'
          }`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
