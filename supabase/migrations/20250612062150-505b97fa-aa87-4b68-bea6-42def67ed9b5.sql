
-- Add email_provider column to the existing waitlist table
ALTER TABLE public.waitlist 
ADD COLUMN email_provider TEXT NOT NULL DEFAULT 'Other';

-- Update the column to remove the default after adding it (for future inserts)
ALTER TABLE public.waitlist 
ALTER COLUMN email_provider DROP DEFAULT;
