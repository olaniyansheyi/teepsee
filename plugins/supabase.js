import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mnuirjimzkfkyiugljgf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1udWlyamltemtma3lpdWdsamdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3NTI0NzEsImV4cCI6MjA0MDMyODQ3MX0.7wb0M1L8cZLK26GQ8JT58v4oiZnEy2zqExC3OhozMRw";

export default defineNuxtPlugin((nuxtApp) => {
  const supabase = createClient(supabaseUrl, supabaseKey);
  nuxtApp.provide("supabase", supabase);
});
