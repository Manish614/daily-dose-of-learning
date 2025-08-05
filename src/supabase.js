import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ebkrbkabsdshvlelzclx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVia3Jia2Fic2RzaHZsZWx6Y2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxNjE3NzIsImV4cCI6MjA2OTczNzc3Mn0.X6ikfDvaedNcAdpdLquNAkamciuT_8y7ZjSQuvLuvwQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
