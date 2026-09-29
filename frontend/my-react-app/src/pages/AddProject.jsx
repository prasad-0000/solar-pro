import React, { useRef, useState, useCallback } from "react";
import Cropper from "react-easy-crop";

import {
  ImagePlus,
  Upload,
  FolderKanban,
  Type,
  FileText,
  Eye,
  X,
  Loader2,
  Crop,
  Check,
} from "lucide-react";

// const API_BASE_URL = "https://solar-pro-1eog.onrender.com";
const API_BASE_URL = "http://localhost:5000";

/* GET CROPPED IMAGE */
const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();

    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));

    image.setAttribute("crossOrigin", "anonymous");
    image.src = url;
  });

const getCroppedImg = async (imageSrc, pixelCrop) => {
  const image = await createImage(imageSrc);

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height,
  );

  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          resolve(null);
          return;
        }

        const croppedFile = new File([blob], `project-${Date.now()}.jpg`, {
          type: "image/jpeg",
        });

        resolve({
          file: croppedFile,
          preview: URL.createObjectURL(blob),
        });
      },
      "image/jpeg",
      0.9,
    );
  });
};

export default function AddProject() {
  const [form, setForm] = useState({
    category: "",
    title: "",
    description: "",
  });

  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState("");

  // CROPPER STATES
  const [imageToCrop, setImageToCrop] = useState("");
  const [showCropper, setShowCropper] = useState(false);

  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  });

  const [zoom, setZoom] = useState(1);

  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isCropping, setIsCropping] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setForm((previousForm) => ({
      ...previousForm,
      [e.target.name]: e.target.value,
    }));
  };

  /* SELECT IMAGE */
  const handlePhotoChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    setError("");

    if (!selectedFile.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    // Open crop screen instead of directly saving image
    const imageUrl = URL.createObjectURL(selectedFile);

    setImageToCrop(imageUrl);

    setCrop({
      x: 0,
      y: 0,
    });

    setZoom(1);

    setShowCropper(true);
  };

  /* CROPPER COMPLETE */
  const onCropComplete = useCallback((croppedArea, croppedAreaPixelsValue) => {
    setCroppedAreaPixels(croppedAreaPixelsValue);
  }, []);

  /* SAVE CROPPED IMAGE */
  const handleCropSave = async () => {
    if (!imageToCrop || !croppedAreaPixels) return;

    try {
      setIsCropping(true);

      const croppedImage = await getCroppedImg(imageToCrop, croppedAreaPixels);

      if (!croppedImage) {
        setError("Unable to crop the image.");
        return;
      }

      // Remove old preview URL
      if (preview) {
        URL.revokeObjectURL(preview);
      }

      setPhoto(croppedImage.file);
      setPreview(croppedImage.preview);

      URL.revokeObjectURL(imageToCrop);

      setImageToCrop("");
      setShowCropper(false);
    } catch (error) {
      console.error("Crop Error:", error);
      setError("Unable to crop the image.");
    } finally {
      setIsCropping(false);
    }
  };

  /* CANCEL CROP */
  const handleCropCancel = () => {
    if (imageToCrop) {
      URL.revokeObjectURL(imageToCrop);
    }

    setImageToCrop("");
    setShowCropper(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  /* REMOVE PHOTO */
  const removePhoto = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setPhoto(null);
    setPreview("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  /* SUBMIT PROJECT */
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!photo) {
      setError("Please select and crop a project photo.");
      return;
    }

    if (!form.category) {
      setError("Please select a project category.");
      return;
    }

    if (!form.title.trim()) {
      setError("Please enter the project title.");
      return;
    }

    if (!form.description.trim()) {
      setError("Please enter the project description.");
      return;
    }

    try {
      setIsSubmitting(true);

      const formData = new FormData();

      formData.append("photo", photo);
      formData.append("category", form.category);
      formData.append("title", form.title);
      formData.append("description", form.description);

      const response = await fetch(`${API_BASE_URL}/api/projects`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || "Unable to add project.");
        return;
      }

      setSuccess("Project added successfully!");

      setForm({
        category: "",
        title: "",
        description: "",
      });

      if (preview) {
        URL.revokeObjectURL(preview);
      }

      setPhoto(null);
      setPreview("");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Add Project Error:", error);

      setError("Unable to connect to the server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* HEADER */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="eyebrow">Project Gallery</span>

            <h1 className="mt-3 font-display text-3xl font-semibold md:text-5xl">
              Add a new solar project.
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] md:text-base">
              Add your completed solar projects to the gallery. Upload, crop,
              and save a project image.
            </p>
          </div>

          <button
            type="button"
            onClick={() => (window.location.href = "/admin/admin-projects")}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-orange-400/60 px-5 py-2.5 text-sm font-medium text-orange-300 transition hover:bg-orange-500/10"
          >
            <Eye size={16} />
            View All Projects
          </button>
        </div>

        {/* MAIN FORM */}
        <div className="mt-10 grid gap-8 md:grid-cols-[350px_1fr]">
          {/* LEFT SIDE */}
          <div className="card-surface rounded-2xl border border-white/10 p-8">
            <div className="inline-flex rounded-2xl bg-dawn-gradient p-3 text-[var(--bg)]">
              <FolderKanban size={25} />
            </div>

            <h2 className="mt-6 font-display text-xl font-semibold">
              Project gallery
            </h2>

            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Showcase your completed solar installations and help visitors
              explore your previous work.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                Project Categories
              </p>

              <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                <li>• Residential</li>
                <li>• Commercial</li>
                <li>• Industrial</li>
                {/* <li>• Other</li> */}
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-orange-500/20 bg-orange-500/[0.04] p-4">
              <div className="flex items-center gap-2">
                <Crop size={17} className="text-orange-400" />

                <p className="text-sm font-medium">Crop before upload</p>
              </div>

              <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                After selecting an image, adjust the crop area and zoom before
                saving your project photo.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="card-surface rounded-2xl border border-white/10 p-6 md:p-8">
            <h2 className="font-display text-xl font-semibold">
              Add project details
            </h2>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Fill in the project information below.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              {/* PHOTO UPLOAD */}
              <div>
                <label className="mb-2 block text-sm text-[var(--muted)]">
                  Project Photo
                </label>

                <input
                  ref={fileInputRef}
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                  id="project-photo"
                />

                {!preview ? (
                  <label
                    htmlFor="project-photo"
                    className="flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-[var(--bg)]/40 px-5 transition hover:border-orange-400/50 hover:bg-orange-500/[0.03]"
                  >
                    <div className="rounded-xl bg-orange-500/10 p-3">
                      <ImagePlus size={26} className="text-orange-400" />
                    </div>

                    <p className="mt-4 text-sm font-medium">
                      Upload & Crop Project Image
                    </p>

                    <p className="mt-1 text-xs text-[var(--muted)]">
                      Select an image, then crop it before uploading
                    </p>
                  </label>
                ) : (
                  <div className="relative overflow-hidden rounded-xl border border-white/10">
                    <img
                      src={preview}
                      alt="Project preview"
                      className="h-64 w-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={removePhoto}
                      className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-red-500"
                    >
                      <X size={17} />
                    </button>

                    <label
                      htmlFor="project-photo"
                      className="absolute bottom-3 left-3 inline-flex cursor-pointer items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-xs text-white transition hover:bg-black"
                    >
                      <Crop size={14} />
                      Change & Crop
                    </label>
                  </div>
                )}
              </div>

              {/* CATEGORY */}
              <div>
                <label className="mb-2 block text-sm text-[var(--muted)]">
                  Project Category
                </label>

                <div className="relative">
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full appearance-none rounded-xl border border-white/20 bg-[var(--bg)] px-4 py-3 pr-12 text-sm text-[var(--text)] outline-none transition focus:border-orange-400"
                  >
                    <option value="">Select project category</option>

                    <option value="Residential">Residential</option>

                    <option value="Commercial">Commercial</option>

                    <option value="Industrial">Industrial</option>

                    <option value="Other">Other</option>
                  </select>

                  <FolderKanban
                    size={17}
                    className="pointer-events-none absolute right-4 top-3.5 text-[var(--muted)]"
                  />
                </div>
              </div>

              {/* TITLE */}
              <div>
                <label className="mb-2 block text-sm text-[var(--muted)]">
                  Project Title
                </label>

                <div className="relative">
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Enter project title"
                    className="w-full rounded-xl border border-white/20 bg-[var(--bg)] px-4 py-3 pr-12 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-orange-400"
                  />

                  <Type
                    size={17}
                    className="pointer-events-none absolute right-4 top-3.5 text-[var(--muted)]"
                  />
                </div>
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="mb-2 block text-sm text-[var(--muted)]">
                  Project Description
                </label>

                <div className="relative">
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows="5"
                    placeholder="Describe the solar installation project..."
                    className="w-full resize-none rounded-xl border border-white/20 bg-[var(--bg)] px-4 py-3 pr-12 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-orange-400"
                  />

                  <FileText
                    size={17}
                    className="pointer-events-none absolute right-4 top-4 text-[var(--muted)]"
                  />
                </div>
              </div>

              {/* ERROR */}
              {error && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              {/* SUCCESS */}
              {success && (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3">
                  <p className="text-sm text-green-400">{success}</p>
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-dawn-gradient px-6 py-3.5 font-medium text-[var(--bg)] shadow-glow transition disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Adding Project...
                  </>
                ) : (
                  <>
                    <Upload size={18} />
                    Add Project
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* IMAGE CROPPER MODAL */}
      {showCropper && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[var(--panel)] shadow-2xl">
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <h2 className="font-display text-lg font-semibold">
                  Crop Project Image
                </h2>

                <p className="mt-1 text-xs text-[var(--muted)]">
                  Drag the image and use zoom to adjust the visible area.
                </p>
              </div>

              <button
                type="button"
                onClick={handleCropCancel}
                disabled={isCropping}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/10 disabled:opacity-50"
              >
                <X size={18} />
              </button>
            </div>

            {/* CROPPER */}
            <div className="relative h-[420px] bg-black">
              <Cropper
                image={imageToCrop}
                crop={crop}
                zoom={zoom}
                aspect={16 / 9}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>

            {/* ZOOM */}
            <div className="border-t border-white/10 px-5 py-5">
              <div className="flex items-center gap-4">
                <span className="text-sm text-[var(--muted)]">Zoom</span>

                <input
                  type="range"
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="flex-1 accent-orange-400"
                />

                <span className="w-10 text-right text-xs text-[var(--muted)]">
                  {zoom.toFixed(1)}x
                </span>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col-reverse gap-3 border-t border-white/10 px-5 py-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleCropCancel}
                disabled={isCropping}
                className="rounded-full border border-white/10 px-5 py-2.5 text-sm transition hover:bg-white/5 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleCropSave}
                disabled={isCropping}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-dawn-gradient px-5 py-2.5 text-sm font-medium text-[var(--bg)] shadow-glow disabled:opacity-60"
              >
                {isCropping ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Cropping...
                  </>
                ) : (
                  <>
                    <Check size={16} />
                    Save Crop
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
