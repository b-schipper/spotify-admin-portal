"use client";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "@/services/axios-service";
import { uploadNewMusicTrack } from "@/services/artist-service";

const musicTrackSchema = z.object({
  title: z.string({ required_error: "Title is required" }).min(1),
  duration: z.string()//.min(1, { message: "Duration is required" }),
});

type musicTrackValidation = z.infer<typeof musicTrackSchema>;

const NewMusicTrackForm = () => {
  const instance = axiosInstance();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<musicTrackValidation>({
    resolver: zodResolver(musicTrackSchema),
  });

  const onSubmit: SubmitHandler<musicTrackValidation> = async (data) => {
    try {
      console.log("reaches onSubmit");
      handleCreation(data.title, data.duration);
    } catch (error) {}
  };

  const handleCreation = async (
    title: string, 
    duration: string
  ) => {
    try {
      console.log("reaches handleCreation");
      const response = await uploadNewMusicTrack(instance, title, duration);

    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  return (
    <form className="flex flex-col" 
          onSubmit={handleSubmit(onSubmit)}>
      <h1>Upload a new song</h1>
      <label>Title</label>
      <input
        id="title"
        type="text"
        {...register("title")}
      />
      <label>Duration (in seconds)</label>
      <input 
        id="duration"
        type="text" 
        {...register("duration")}
      />
      
      <button type="submit">Submit</button>
    </form>
  );
  
}

export default NewMusicTrackForm;