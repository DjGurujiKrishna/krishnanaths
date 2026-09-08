"use client";

import { useState } from "react";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "textarea" | "number" | "select";
  options?: string[];
  placeholder?: string;
};

type Item = Record<string, string | number | Date | null | undefined> & {
  id: string;
};

export default function CrudManager({
  title,
  hint,
  fields,
  items,
  createAction,
  updateAction,
  deleteAction,
}: {
  title: string;
  hint?: string;
  fields: Field[];
  items: Item[];
  createAction: (formData: FormData) => Promise<void>;
  updateAction: (formData: FormData) => Promise<void>;
  deleteAction: (formData: FormData) => Promise<void>;
}) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const editing = items.find((item) => item.id === editingId);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-black font-outfit uppercase tracking-tight">
          {title}
        </h2>
        {hint ? (
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
            {hint}
          </p>
        ) : null}
      </div>

      <form
        key={editingId ?? "create"}
        action={editing ? updateAction : createAction}
        className="glass-card p-6 grid gap-4 md:grid-cols-2"
      >
        {editing ? <input type="hidden" name="id" value={editing.id} /> : null}
        {fields.map((field) => (
          <label
            key={field.name}
            className={field.type === "textarea" ? "md:col-span-2 block" : "block"}
          >
            <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
              {field.label}
            </span>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                required
                defaultValue={String(editing?.[field.name] ?? "")}
                placeholder={field.placeholder}
                className="admin-input min-h-28"
              />
            ) : field.type === "select" ? (
              <select
                name={field.name}
                defaultValue={String(editing?.[field.name] ?? field.options?.[0] ?? "")}
                className="admin-input"
              >
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                name={field.name}
                type={field.type === "number" ? "number" : "text"}
                required={
                  ![
                    "credentialUrl",
                    "githubLink",
                    "productionLink",
                    "icon",
                    "order",
                  ].includes(field.name)
                }
                defaultValue={String(editing?.[field.name] ?? "")}
                placeholder={field.placeholder}
                className="admin-input"
              />
            )}
          </label>
        ))}
        <div className="md:col-span-2 flex flex-wrap gap-3">
          <button className="btn-modern" type="submit">
            {editing ? "Save changes" : "Add item"}
          </button>
          {editing ? (
            <button
              className="btn-outline"
              type="button"
              onClick={() => setEditingId(null)}
            >
              Cancel
            </button>
          ) : null}
        </div>
      </form>

      <div className="space-y-4">
        {items.length === 0 ? (
          <p className="text-zinc-500 text-sm">No records yet.</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="glass-card p-5 flex flex-col md:flex-row md:items-center gap-4 justify-between"
            >
              <div>
                <p className="font-semibold text-white">
                  {String(
                    item.name ??
                      item.title ??
                      item.category ??
                      item.heading ??
                      item.id,
                  )}
                </p>
                <p className="text-xs text-zinc-500 mt-1 max-w-2xl">
                  {String(
                    item.company ??
                      item.organization ??
                      item.skills ??
                      item.value ??
                      item.description ??
                      "",
                  )}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  className="px-4 py-2 rounded-full border border-white/15 text-[10px] font-black uppercase tracking-widest hover:border-red-500/50"
                  type="button"
                  onClick={() => setEditingId(item.id)}
                >
                  Edit
                </button>
                <form action={deleteAction}>
                  <input type="hidden" name="id" value={item.id} />
                  <button
                    className="px-4 py-2 rounded-full border border-red-500/30 text-red-400 text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white"
                    type="submit"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
