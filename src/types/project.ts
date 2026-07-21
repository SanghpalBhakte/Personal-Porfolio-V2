// Shared TypeScript interfaces for Firestore documents
// Add your custom types here as you build out features.

export interface FirestoreProject {
  id:          string;
  title:       string;
  description: string;
  stack:       string[];
  tags:        string[];
  category:    string;
  icon:        string;
  client:      string;
  githubUrl:   string;
  liveUrl:     string;
  thumbnail:   string;
  order:       number;
  published:   boolean;
}
