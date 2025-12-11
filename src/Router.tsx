import { Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Editor } from '@/pages/Editor';
import { NotFound } from '@/pages/NotFound';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doc/:id" element={<Editor />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}