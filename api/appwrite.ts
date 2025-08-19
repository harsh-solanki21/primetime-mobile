import { ITrendingMovie } from "@/types/appwrite";
import { IMovie } from "@/types/movie";
import { Client, Databases, ID, Query } from "react-native-appwrite";

const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID!;
const collectionId = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const database = new Databases(client);

export const updateSearchCount = async (query: string, movie: IMovie) => {
  try {
    const result = await database.listDocuments(dbId, collectionId, [
      Query.equal("searchTerm", query),
    ]);

    if (result.documents.length > 0) {
      const existingMovie = result.documents[0];
      await database.updateDocument(dbId, collectionId, existingMovie.$id, {
        count: existingMovie.count + 1,
      });
    } else {
      await database.createDocument(dbId, collectionId, ID.unique(), {
        searchTerm: query,
        movie_id: movie.id,
        title: movie.title,
        count: 1,
        poster_url: `https://api.themoviedb.org/3${movie.poster_path}`,
      });
    }
  } catch (error) {
    console.error("Error updating search count: ", error);
    throw error;
  }
};

export const getTrendingMovies = async (): Promise<
  ITrendingMovie[] | undefined
> => {
  try {
    const result = await database.listDocuments(dbId, collectionId, [
      Query.limit(5),
      Query.orderDesc("count"),
    ]);

    return result.documents as unknown as ITrendingMovie[];
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
