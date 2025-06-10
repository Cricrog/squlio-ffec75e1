
-- Create a table for waitlist emails
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) to the waitlist table
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to INSERT emails (for public signup)
CREATE POLICY "Anyone can join waitlist" 
  ON public.waitlist 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that prevents SELECT (reading) unless authenticated as admin
CREATE POLICY "Only authenticated users can view waitlist" 
  ON public.waitlist 
  FOR SELECT 
  USING (false);
