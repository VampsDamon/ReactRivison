import conf from "../Conf/conf.js";

import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteURL)
      .setProject(conf.appWriteProjectID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, feturedImage, status, userID }) {
    try {
      return this.databases.createDocument(
        conf.appWriteDatabaseID,
        conf.appWriteCollectionID,
        slug,
        {
          title,
          content,
          feturedImage,
          status,
          userID,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error: ", error);
    }
  }
  async updatePost(
    slug,
    { title,content, feturedImage, status }
  ) {
    try {
      return await this.databases.updateDocument(
        conf.appWriteDatabaseID,
        conf.appWriteCollectionID,
        slug,
        {
           title,
           content,
           feturedImage,
           status, 
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error: ", error);
    }
  }

  async deletePost(slug){
    try {
         await this.databases.deleteDocument(conf.appWriteDatabaseID, conf.appWriteCollectionID, slug)
         return true
    } catch (error) {
        console.log("Appwrite service :: deletePost :: error: ", error);
        return false;
    }
  }

  async getPost(slug){
    try {
        return await this.databases.getDocument(conf.appWriteDatabaseID,conf.appWriteCollectionID,slug)
    } catch (error) {
        console.log("Appwrite service :: getPost :: error: ", error);
        return false;
    }
    
  }

  async getPoats(queris=[Query.equal("status","active")]){

    try {
        return await this.databases.listDocuments(
            conf.appWriteDatabaseID,
            conf.appWriteCollectionID,
            queris, 
        )

    } catch (error) {
       console.log("Appwrite service :: getPosts :: error: ", error);
       return false;
    }

  }


  //+ File Uplaodeed Service
   
  async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appWriteBucketID,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite service :: uploadFile :: error: ", error);
        return false;
    }
  }

  async deleteFile(fileId){
    try {

        await this.bucket.deleteFile(
            conf.appWriteBucketID,
            fileId
        )
        return true;
    } catch (error) {
        console.log("Appwrite service :: deleteFile :: error: ", error);
        return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
        conf.appWriteBucketID,
        fileId,
        );
  }

  
}

const service = new Service();
export default service;
