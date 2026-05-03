type NoteChunk = {
  id: string;
  text: string;
  embedding: number[];
};

type NoteSession = {
  id: string;
  filename: string;
  createdAt: number;
  chunks: NoteChunk[];
};

type NotesStore = Map<string, NoteSession>;

declare global {
  // eslint-disable-next-line no-var
  var __notesQaStore: NotesStore | undefined;
}

const store: NotesStore = globalThis.__notesQaStore ?? new Map();

globalThis.__notesQaStore = store;

export function saveNoteSession(session: NoteSession) {
  store.set(session.id, session);
}

export function getNoteSession(id: string) {
  return store.get(id) ?? null;
}

export function clearNoteSession(id: string) {
  store.delete(id);
}

export type { NoteChunk, NoteSession };
