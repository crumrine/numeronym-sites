CREATE TABLE IF NOT EXISTS submissions (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  model TEXT NOT NULL,
  category TEXT NOT NULL,
  prompt TEXT NOT NULL,
  response TEXT NOT NULL,
  why_wrong TEXT NOT NULL,
  absurdity_rating INTEGER NOT NULL CHECK(absurdity_rating BETWEEN 1 AND 10),
  confidence_rating INTEGER NOT NULL CHECK(confidence_rating BETWEEN 1 AND 10),
  tags TEXT,
  screenshot_url TEXT,
  submitted_by TEXT DEFAULT 'anonymous',
  email TEXT,
  status TEXT DEFAULT 'pending_review' CHECK(status IN ('pending_review', 'approved', 'rejected')),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  reviewed_at DATETIME,
  reviewer_notes TEXT
);

CREATE INDEX idx_submissions_status ON submissions(status);
CREATE INDEX idx_submissions_created_at ON submissions(created_at);
