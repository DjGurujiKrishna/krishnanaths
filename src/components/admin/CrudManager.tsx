"use client";

import { useEffect, useState } from "react";
import SubmitButton from "@/components/admin/SubmitButton";

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

type Modal =
  | { kind: "create" }
  | { kind: "edit"; item: Item }
  | { kind: "delete"; item: Item }
  | null;

function itemLabel(item: Item) {
  return String(
    item.name ?? item.title ?? item.category ?? item.heading ?? item.id,
  );
}

function itemMeta(item: Item) {
  return String(
    item.company ??
      item.organization ??
      item.skills ??
      item.value ??
      item.description ??
      "",
  );
}

function FormFields({ fields, item }: { fields: Field[]; item?: Item }) {
  return (
    <>
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
              defaultValue={String(item?.[field.name] ?? "")}
              placeholder={field.placeholder}
              className="admin-input min-h-28"
            />
          ) : field.type === "select" ? (
            <select
              name={field.name}
              defaultValue={String(
                item?.[field.name] ?? field.options?.[0] ?? "",
              )}
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
              defaultValue={String(item?.[field.name] ?? "")}
              placeholder={field.placeholder}
              className="admin-input"
            />
          )}
        </label>
      ))}
    </>
  );
}

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
  const [modal, setModal] = useState<Modal>(null);

  useEffect(() => {
    if (!modal) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModal(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [modal]);

  const closeModal = () => setModal(null);

  const handleCreate = async (formData: FormData) => {
    await createAction(formData);
    closeModal();
  };

  const handleUpdate = async (formData: FormData) => {
    await updateAction(formData);
    closeModal();
  };

  const handleDelete = async (formData: FormData) => {
    await deleteAction(formData);
    closeModal();
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
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
        <button
          className="btn-modern w-fit"
          type="button"
          onClick={() => setModal({ kind: "create" })}
        >
          Add item
        </button>
      </div>

      <div className="space-y-4">
        {items.length === 0 ? (
          <div className="glass-card p-8 text-center">
            <p className="text-zinc-500 text-sm">No records yet.</p>
            <button
              className="btn-outline mt-5"
              type="button"
              onClick={() => setModal({ kind: "create" })}
            >
              Add the first item
            </button>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="glass-card p-5 flex flex-col md:flex-row md:items-center gap-4 justify-between"
            >
              <div className="min-w-0">
                <p className="font-semibold text-white break-words">
                  {itemLabel(item)}
                </p>
                <p className="text-xs text-zinc-500 mt-1 max-w-2xl line-clamp-2 break-words">
                  {itemMeta(item)}
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  className="px-4 py-2 rounded-full border border-white/15 text-[10px] font-black uppercase tracking-widest hover:border-red-500/50"
                  type="button"
                  onClick={() => setModal({ kind: "edit", item })}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 rounded-full border border-red-500/30 text-red-400 text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white"
                  type="button"
                  onClick={() => setModal({ kind: "delete", item })}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {modal?.kind === "create" || modal?.kind === "edit" ? (
        <div
          className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-6"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="crud-form-title"
            className="relative z-10 w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-white/10 bg-neutral-950 p-6 sm:p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-red-500">
                  {title}
                </p>
                <h3
                  id="crud-form-title"
                  className="mt-2 text-2xl font-black font-outfit uppercase tracking-tight"
                >
                  {modal.kind === "edit" ? "Edit item" : "Add item"}
                </h3>
              </div>
              <button
                className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white"
                type="button"
                onClick={closeModal}
              >
                Close
              </button>
            </div>

            <form
              key={modal.kind === "edit" ? modal.item.id : "create"}
              action={modal.kind === "edit" ? handleUpdate : handleCreate}
              className="grid gap-4 md:grid-cols-2"
            >
              {modal.kind === "edit" ? (
                <input type="hidden" name="id" value={modal.item.id} />
              ) : null}
              <FormFields
                fields={fields}
                item={modal.kind === "edit" ? modal.item : undefined}
              />
              <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
                <SubmitButton
                  idle={modal.kind === "edit" ? "Save changes" : "Add item"}
                  pending={
                    modal.kind === "edit" ? "Saving..." : "Submitting..."
                  }
                />
                <button
                  className="btn-outline"
                  type="button"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {modal?.kind === "delete" ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-6"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="crud-delete-title"
            className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-neutral-950 p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-red-500">
              Confirm delete
            </p>
            <h3
              id="crud-delete-title"
              className="mt-3 text-2xl font-black font-outfit uppercase tracking-tight"
            >
              Delete this item?
            </h3>
            <p className="mt-3 text-sm text-zinc-400 break-words">
              {itemLabel(modal.item)} will be removed permanently. This cannot
              be undone.
            </p>
            <form action={handleDelete} className="mt-8 flex flex-wrap gap-3">
              <input type="hidden" name="id" value={modal.item.id} />
              <SubmitButton
                idle="Yes, delete"
                pending="Deleting..."
                className="px-8 py-3 rounded-full bg-red-600 text-white font-bold uppercase tracking-wider hover:bg-red-500 disabled:opacity-60 disabled:cursor-wait"
              />
              <button className="btn-outline" type="button" onClick={closeModal}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
