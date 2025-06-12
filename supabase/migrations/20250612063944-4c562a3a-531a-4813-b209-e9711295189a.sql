
-- Add first_name and last_name columns to the existing waitlist table
ALTER TABLE public.waitlist 
ADD COLUMN first_name TEXT NOT NULL DEFAULT '',
ADD COLUMN last_name TEXT NOT NULL DEFAULT '';

-- Update the column to remove the default after adding it (for future inserts)
ALTER TABLE public.waitlist 
ALTER COLUMN first_name DROP DEFAULT,
ALTER COLUMN last_name DROP DEFAULT;
